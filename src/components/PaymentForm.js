import React, { useState } from 'react';
import coursePrices from '../CoursePriceData';

const PaymentForm = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    address: '',
    course: '',
    amount: 0,
  });

  const whatsappLink = "https://chat.whatsapp.com/KExPXF8ELJiL4RStRL9L9v?mode=ac_t";

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Auto-calculate amount
    if (name === 'course') {
      setForm((prev) => ({
        ...prev,
        course: value,
        amount: coursePrices[value] || 0,
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isLoaded = await loadRazorpayScript();
    if (!isLoaded) return alert("Razorpay SDK failed to load");

    // Create Order from backend
    const res = await fetch("http://localhost:5000/api/payment/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: form.amount }),
    });

    const orderData = await res.json();

    const options = {
      key: "YOUR_RAZORPAY_KEY_ID", // replace this with real key
      amount: orderData.amount,
      currency: orderData.currency,
      name: "Pranverse",
      description: `Payment for ${form.course}`,
      order_id: orderData.id,
      handler: async function (response) {
        // Save user + payment info
        const verifyRes = await fetch("http://localhost:5000/api/payment/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...form,
            paymentId: response.razorpay_payment_id,
            status: "Success",
          }),
        });

        if (verifyRes.ok) {
          alert("Payment Successful!");
          window.location.href = whatsappLink;
        } else {
          alert("Payment saved failed!");
        }
      },
      prefill: {
        name: form.name,
        contact: form.phone,
      },
      theme: { color: "#F37254" },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="container my-5" style={{ maxWidth: "600px" }}>
      <h2>Course Enrollment</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" className="form-control my-2" required onChange={handleChange} />
        <input name="phone" placeholder="Phone" className="form-control my-2" required onChange={handleChange} />
        <input name="address" placeholder="Address" className="form-control my-2" required onChange={handleChange} />

        <select name="course" className="form-control my-2" required onChange={handleChange}>
          <option value="">Select Course</option>
          {Object.keys(coursePrices).map((course, index) => (
            <option key={index} value={course}>{course}</option>
          ))}
        </select>

        <input value={`Amount: ₹${form.amount}`} className="form-control my-2" readOnly />

        <button className="btn btn-success btn-block" type="submit">
          Pay & Join WhatsApp Group
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
