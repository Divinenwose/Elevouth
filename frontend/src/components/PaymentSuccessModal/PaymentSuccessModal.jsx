import "./PaymentSuccessModal.css";



const PaymentSuccessModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="payment-overlay">
      <div className="payment-box">
        <div className="top-container">
          <span className="close-modal" onClick={onClose}>
            <img src={exit} alt="" />
          </span>
        </div>
        <div className="success-content">
          <img src="" alt="" />
          <p>Successful Purchase</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessModal;
