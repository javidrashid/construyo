import React from "react";

// components

import AdminNavbar from "components/Navbars/AdminNavbar";
import Sidebar from "components/Sidebar/Sidebar";
import HeaderStats from "components/Headers/HeaderStats";
import FooterAdmin from "components/Footers/FooterAdmin";

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
