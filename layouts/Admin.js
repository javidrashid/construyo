import React from "react";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

import { AuthProvider } from 'hooks/useAuth';

export default function Admin({ children }) {

  return (
    <>
      <AuthProvider>
      <Sidebar />
      <div className="relative md:ml-64 bg-gray-200">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full m-48 mb-0 mt-24">
          {children}
          <FooterAdmin />
        </div>
      </div>
      </AuthProvider>
    </>
  );
}
