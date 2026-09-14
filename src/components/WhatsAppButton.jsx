import "./WhatsAppButton.css";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noreferrer"
      className="lonvera-whatsapp-float"
      aria-label="Chat with LONVÉRA on WhatsApp"
    >
      <span className="lonvera-whatsapp-icon">
        <i className="bi bi-whatsapp"></i>
      </span>

      <span className="lonvera-whatsapp-text">
        <small>CHAT WITH US</small>
        <strong>WhatsApp</strong>
      </span>

      <span className="lonvera-whatsapp-arrow">
        <i className="bi bi-arrow-up-right"></i>
      </span>
    </a>
  );
}

export default WhatsAppButton;