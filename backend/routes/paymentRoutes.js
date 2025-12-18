const express = require("express");
const axios = require("axios");
const nodemailer = require("nodemailer");

const router = express.Router();

router.post("/verify", async (req, res) => {
    const { transaction_id, expectedAmount, course } = req.body;

    try {
        const response = await axios.get(
            `https://api.flutterwave.com/v3/transactions/${transaction_id}/verify`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.FLW_SECRET_KEY}`,
                },
            }
        );

        const payment = response.data.data;
        if (
            payment.status === "successful" &&
            Number(payment.amount) === Number(expectedAmount) &&
            payment.currency === "NGN"
        ) {
            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS,
                },
            });
            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: payment.customer.email,
                subject: "Payment Receipt - Academy Checkout",
                html: `
                <h2>🎉 Payment Successful</h2>
                <p>Thank you, ${payment.customer.name}, for your payment.</p>
                <p><strong>Course:</strong> ${course?.title || "N/A"}</p>
                <p><strong>Amount Paid:</strong> ₦${payment.amount.toLocaleString()}</p>
                <p><strong>Transaction ID:</strong> ${payment.id}</p>
                <p><strong>Date:</strong> ${new Date(payment.created_at).toLocaleString()}</p>
                <p>We look forward to seeing you in the course!</p>
                `,
            };

            transporter.sendMail(mailOptions, (err, info) => {
                if (err) console.error("Error sending receipt:", err);
                else console.log("Receipt sent:", info.response);
            });

            return res.json({
                success: true,
                message: "Payment verified and receipt sent",
                payment,
            });
        } else {
            return res.status(400).json({
                success: false,
                message: "Payment verification failed",
            });
        }
    } catch (error) {
        console.error(error.response?.data || error.message);
        res.status(500).json({ success: false, message: "Server error" });
    }
});

module.exports = router;
