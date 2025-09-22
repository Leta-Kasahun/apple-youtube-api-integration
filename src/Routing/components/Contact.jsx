import React from "react";
import { FaGithub, FaLinkedinIn, FaWhatsapp, FaTelegram } from "react-icons/fa";

function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-blue-500 mb-8">
        Connect with Me
      </h2>

      <div className="flex space-x-8">
        <a
          href="https://github.com/Leta-Kasahun"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-black transition-transform transform hover:scale-125"
        >
          <FaGithub size={40} />
        </a>

        <a
          href="https://linkedin.com/in/Lkasahun"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 transition-transform transform hover:scale-125"
        >
          <FaLinkedinIn size={40} />
        </a>

        <a
          href="https://wa.me/yourphonenumber"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 hover:text-green-700 transition-transform transform hover:scale-125"
        >
          <FaWhatsapp size={40} />
        </a>

        <a
          href="https://t.me/letakasahun"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-600 transition-transform transform hover:scale-125"
        >
          <FaTelegram size={40} />
        </a>
      </div>
    </div>
  );
}

export default Contact;
