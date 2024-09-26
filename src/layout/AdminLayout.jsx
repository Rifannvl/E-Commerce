import React from "react";
import NavbarDashboard from "../dasboardadmin/NavbarDashboard";
import Footer from "../components/Footer";

export default function AdminLayout({ children }) {
  return (
    <div>
      <NavbarDashboard />
      <main>
        {children}
        {/* Your admin layout content goes here */}
      </main>
      <Footer />
    </div>
  );
}
