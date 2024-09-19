import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto mx-auto">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold mb-2">Company Name</h2>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Company Name. All rights reserved.
          </p>
        </div>

        <nav className="flex flex-col md:flex-row md:justify-center mb-4 md:mb-0 items-center">
          <Link
            to="/"
            className="text-white font-bold  hover:text-gray-400 mx-2"
          >
            Home
          </Link>
        </nav>

        <div className="flex justify-end space-x-4 items-center">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
