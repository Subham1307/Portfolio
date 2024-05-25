import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from 'react';
import { motion } from 'framer-motion';


// npm i @emailjs/browser

const Hire = () => {
    const form = useRef();
    const [sent, setSent] = useState(false);


    const sendEmail = (e) => {
        e.preventDefault();
        setSent(true); // For demonstration purpose, set sent state to true


        emailjs
            .sendForm(
                "service_1u06fon",
                "template_mdgq1wm",
                form.current,
                "E_FfKSEw5eAt-GQMY"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    console.log("message sent");
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };



    return (
        <motion.form
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={sendEmail}
            className="w-full max-w-md mx-auto bg-transparent rounded shadow p-8"
        >
            <label className="block mb-4">
                <span className="text-gray-700">Name</span>
                <input
                    type="text"
                    name="user_name"
                    className="form-input mt-1 block w-full bg-white bg-opacity-25"
                />
            </label>
            <label className="block mb-4">
                <span className="text-gray-700">Email</span>
                <input
                    type="email"
                    name="user_email"
                    className="form-input mt-1 block w-full bg-white bg-opacity-25"
                />
            </label>
            <label className="block mb-4">
                <span className="text-gray-700">Message</span>
                <textarea
                    name="message"
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

