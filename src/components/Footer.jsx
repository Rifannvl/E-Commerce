import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="container mx-auto bg-gray-800 text-white py-6 px-4">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h2 className="text-xl font-bold mb-2">Company Name</h2>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Company Name. All rights reserved.
          </p>
        </div>

        <nav className="flex flex-col md:flex-row md:justify-center mb-4 md:mb-0 items-center">
          <Link
            to="/"
            className="text-white font-bold hover:text-gray-400 mx-2"
          >
            Home
          </Link>
          {/* Tambahkan lebih banyak link sesuai kebutuhan */}
        </nav>

        <div className="flex justify-center space-x-4 items-center">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <FaFacebook size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
