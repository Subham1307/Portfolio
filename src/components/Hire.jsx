import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

// Ensure you have installed the emailjs package with npm install @emailjs/browser

const Hire = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_1u06fon', // Your EmailJS service ID
        'template_mdgq1wm', // Your EmailJS template ID
        form.current, // Form reference
        'E_FfKSEw5eAt-GQMY' // Your EmailJS public key
      )
      .then(
        (result) => {
          console.log("result :",result.text);
          console.log('Message sent');
          setSent(true); // Update state to indicate message was sent
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <motion.form
      ref={form} // Attach the form reference here
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={sendEmail}
      className="w-full max-w-md mx-auto bg-transparent rounded shadow p-8"
    >
      <label className="block mb-4">
        <span className="text-gray-700">Name</span>
        <input
          type="text"
          name="user_name"
          required
          className="form-input mt-1 block w-full bg-white bg-opacity-25"
        />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">Email</span>
        <input
          type="email"
          name="user_email"
          required
          className="form-input mt-1 block w-full bg-white bg-opacity-25"
        />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">Message</span>
        <textarea
          name="message"
          required
          className="form-textarea mt-1 block w-full bg-white bg-opacity-25"
          rows="6"
        ></textarea>
      </label>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        {sent ? 'Sent!' : 'Send'}
      </button>
    </motion.form>
  );
};

export default Hire;
