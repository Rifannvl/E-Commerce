import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function BaseLayout(pros) {
  return (
    <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black">
      {/* Header */}
      <Header />

      {/* Content */}
      <main>{pros.children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
