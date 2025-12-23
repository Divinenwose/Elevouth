import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import "./Checkout.css";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumbs.jsx";
import PaymentSuccessModal from "../../components/PaymentSuccessModal/PaymentSuccessModal.jsx";
import logo from "../../assets/logo.png";
import back from "../../assets/back.png";

const Checkout = () => {
    const { state } = useLocation();
    const course = state?.course;
    const navigate = useNavigate();

    const [contact, setContact] = useState({
        firstName: "",
        lastName: "",
        email: "",
    });

    const [paymentPlan, setPaymentPlan] = useState("");
    const [verifying, setVerifying] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [paymentInfo, setPaymentInfo] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [coupon, setCoupon] = useState("");
    const [discount, setDiscount] = useState(0);


    if (!course) return <p>No course selected</p>;

    const unitPrice = paymentPlan === "part" ? course.price / 2 : course.price;

    const cartTotal = unitPrice * quantity;
    const finalTotal = cartTotal - discount;


    const flutterConfig = {
        public_key: import.meta.env.VITE_FLW_PUBLIC_KEY,
        tx_ref: Date.now().toString(),
        amount: finalTotal,
        currency: "NGN",
        payment_options: "card,banktransfer,ussd",
        customer: {
            email: contact.email,
            name: `${contact.firstName} ${contact.lastName}`,
        },
        customizations: {
            title: "Academy Checkout",
            description: `Payment for ${course.title}`,
            logo: logo,
        },
    };

    const handleFlutterPayment = useFlutterwave(flutterConfig);

    const handleProceed = () => {
        if (!contact.firstName || !contact.lastName || !contact.email || !paymentPlan) {
            alert("Please fill all required fields");
            return;
        }

        const amountToPay = finalTotal;

        handleFlutterPayment({
            callback: async (response) => {
                console.log("Flutterwave response:", response);

                if (response.status === "successful" || response.status === "completed") {
                    setVerifying(true);

                    try {
                        const payload = {
                            transaction_id: response.transaction_id,
                            expectedAmount: finalTotal,
                            course,
                            contact,
                        };

                        const res = await fetch("https://elevouth-backend.onrender.com/api/payment/verify", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(payload),
                        });

                        const data = await res.json();

                        if (data.success) {
                            setPaymentInfo(data.payment);
                            setShowSuccessModal(true);
                        } else {
                            alert("Payment verification failed");
                        }
                    } catch (error) {
                        console.error("Payment verification error:", error);
                        alert("Server error verifying payment");
                    } finally {
                        setVerifying(false);
                        closePaymentModal();
                    }
                } else {
                    alert("Payment not completed");
                    closePaymentModal();
                }
            },
        });
    };

    const applyCoupon = () => {
        if (coupon === "ELEVOUTH10") {
            setDiscount(cartTotal * 0.1);
        } else {
            alert("Invalid coupon code");
            setDiscount(0);
        }
    };
    return (
        <div className="checkout-page">
            <div className="checkout-nav">
                <div
                    className="checkout-back"
                    onClick={() => navigate("/academy/tech-programs")}
                    aria-label="Back to programs"
                >
                    <img src={back} alt="" />
                </div>
                <img className="checkout-logo" src={logo} alt="" />
            </div>
            <div className="checkout-container">
                <div className="checkout-bread">
                    <Breadcrumb />
                    <button onClick={() => navigate(-1)} className="back-btn">
                        Back
                    </button>
                </div>
                <div className="checkout-section">
                    <div className="checkout-flex">
                        <h2>Contact Information</h2>
                        <div className="input-container">
                            <div className="names">
                                <div className="fname">
                                    <label>First Name</label>
                                    <input
                                        placeholder="Enter first name"
                                        value={contact.firstName}
                                        onChange={(e) =>
                                            setContact({
                                                ...contact,
                                                firstName: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                                <div className="lname">
                                    <label>Last Name</label>
                                    <input
                                        placeholder="Enter last name"
                                        value={contact.lastName}
                                        onChange={(e) =>
                                            setContact({
                                                ...contact,
                                                lastName: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                            </div>
                            <div className="email">
                                <label>Email</label>
                                <input
                                    placeholder="your@email.com"
                                    value={contact.email}
                                    onChange={(e) =>
                                        setContact({
                                            ...contact,
                                            email: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="payment">
                                <label>Choose Payment Plan</label>
                                <select
                                    className="payment-select"
                                    value={paymentPlan}
                                    onChange={(e) =>
                                        setPaymentPlan(e.target.value)
                                    }
                                >
                                    <option value="" disabled hidden>
                                        Select Plan
                                    </option>
                                    <option value="full">Full payment</option>
                                    <option value="part">Part payment</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="checkout-main">
                        <div className="checkout-card">
                            <div className="program-row">
                                <div>
                                    <h4>{course.title || course.title1}</h4>
                                    <div className="cart-price">
                                        {paymentPlan === "part" ? (
                                            <>
                                                <span className="new-price">
                                                    ₦{(course.price / 2).toLocaleString()}
                                                </span>
                                                <span className="old-price">
                                                    ₦{course.price.toLocaleString()}
                                                </span>
                                            </>
                                        ) : (
                                            <span className="new-price">
                                                ₦{course.price.toLocaleString()}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <div className="qty-control">
                                    <button
                                        onClick={() =>
                                            setQuantity((q) => Math.max(1, q - 1))
                                        }
                                    >
                                        −
                                    </button>
                                    <span className="quantity">{quantity}</span>
                                    <button onClick={() => setQuantity((q) => q + 1)}>
                                        +
                                    </button>
                                </div>
                            </div>
                            <div className="coupon-section">
                                <p>
                                    Got a coupon code?{" "}
                                    <span className="coupon-link">Click here</span>
                                </p>

                                <div className="coupon-container">
                                    <div>
                                        <label htmlFor="">Coupon code</label>
                                        <div className="coupon-input">
                                            <input
                                                placeholder="Enter coupon code"
                                                value={coupon}
                                                onChange={(e) => setCoupon(e.target.value)}
                                            />
                                            <button className="coupon-btn" onClick={applyCoupon}>Apply</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="totals">
                                <div className="total-row">
                                    <span className="cartt">Cart Total</span>
                                    <span className="cartt-amt">₦{cartTotal.toLocaleString()}</span>
                                </div>

                                <div className="total-row-grand">
                                    <span className="cartt">Total</span>
                                    <span className="cartt-amt" >₦{finalTotal.toLocaleString()}</span>
                                </div>
                            </div>
                            <button
                                className="pay-now-btn"
                                onClick={handleProceed}
                                disabled={verifying}
                            >
                                {verifying ? (
                                    "Processing..."
                                ) : (
                                    <span className="pay-amt">Pay ₦{finalTotal.toLocaleString()} now <span className="pay-arrw">→</span></span>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <PaymentSuccessModal
                open={showSuccessModal}
                onClose={() => setShowSuccessModal(false)}
                course={course}
                payment={paymentInfo}
            />

        </div>
    );
};

export default Checkout;
