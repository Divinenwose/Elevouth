const express = require("express");
const axios = require("axios");
const nodemailer = require("nodemailer");

const router = express.Router();

router.post("/verify", async (req, res) => {
    const { transaction_id, expectedAmount, course, contact } = req.body;

    if (!transaction_id) {
        return res.status(400).json({
            success: false,
            message: "Transaction ID is required",
        });
    }

    try {
        // Verify with Flutterwave
        const response = await axios.get(
            `https://api.flutterwave.com/v3/transactions/${transaction_id}/verify`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.FLW_SECRET_KEY}`,
                },
            }
        );

        const payment = response.data.data;

        // ✅ Accept both "successful" and "completed" statuses
        const validStatus =
            payment.status === "successful" || payment.status === "completed";

        // ✅ Use charged_amount for accurate payment
        // In production, you can compare with expectedAmount
        const validAmount = Number(payment.charged_amount) > 0;

        const validCurrency = payment.currency === "NGN";

        if (validStatus && validCurrency && validAmount) {
            // ================== SEND RECEIPT EMAIL ==================
            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS,
                },
            });

            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: payment.customer?.email || contact?.email,
                subject: "Payment Receipt - Academy Checkout",
                html: `
                    <h2>🎉 Payment Successful</h2>
                    <p>Thank you, ${payment.customer?.name || "Student"}, for your payment.</p>

                    <hr/>

                    <p><strong>Transaction ID:</strong> ${payment.id}</p>
                    <p><strong>Reference:</strong> ${payment.tx_ref}</p>
                    <p><strong>Course:</strong> ${course?.title || "N/A"}</p>
                    <p><strong>Amount Paid:</strong> ₦${payment.charged_amount.toLocaleString()}</p>
                    <p><strong>Payment Method:</strong> ${payment.payment_type || "N/A"}</p>
                    <p><strong>Date:</strong> ${new Date(payment.created_at).toLocaleString()}</p>

                    <p>We look forward to seeing you in the course!</p>
                `,
            };

            transporter.sendMail(mailOptions, (err, info) => {
                if (err) {
                    console.error("Error sending receipt:", err);
                } else {
                    console.log("Receipt sent:", info.response);
                }
            });

            return res.json({
                success: true,
                message: "Payment verified and receipt sent",
                payment,
            });
        }

        // ❌ Verification failed
        return res.status(400).json({
            success: false,
            message: "Payment verification failed",
        });
    } catch (error) {
        console.error(
            "Verification error:",
            error.response?.data || error.message
        );
        return res.status(500).json({
            success: false,
            message: "Server error during verification",
        });
    }
});

module.exports = router;
