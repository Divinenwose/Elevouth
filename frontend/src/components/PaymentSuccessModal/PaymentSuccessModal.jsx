import { useNavigate } from "react-router-dom";
import "./PaymentSuccessModal.css";
import succ from "../../assets/succ.png";
import close from "../../assets/close.png";

const PaymentSuccessModal = ({ open }) => {
  const navigate = useNavigate();

  if (!open) return null;

  const handleClose = () => {
    // Redirect to the Academy page
    navigate("/academy");
  };

  return (
    <div className="payment-overlay">
      <div className="payment-box">
        <div className="success-content">
          <span className="close-modal" onClick={handleClose}>
            <div></div>
            <img src={close} alt="Close" />
          </span>
          <div className="succ">
            <img src={succ} alt="Success" className="success-img" />
            <h2>Successful Purchase</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessModal;
