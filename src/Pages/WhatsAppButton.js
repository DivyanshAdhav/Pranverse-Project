
import React from 'react';
import WhatsApp from "../Images/WhatsApp.png"
const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919518399882"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 1000,
      }}
    >
      <img
        src={WhatsApp}
        alt="Chat on WhatsApp"
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
        }}
      />
    </a>
  );
};

export default WhatsAppButton;
