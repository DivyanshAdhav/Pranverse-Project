import React from 'react';
import Contact from './Pages/Contact';
import TopNavbar from './Pages/TopNavbar';
import Footer from './Pages/Footer';
import WhatsAppButton from './Pages/WhatsAppButton';

function ContactPage() {
  return (
    <>
      <TopNavbar />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default ContactPage;
