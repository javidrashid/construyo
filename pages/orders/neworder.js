import React, { useEffect, useState } from "react";

import { useAuth } from 'hooks/useAuth';

// layout for page

import Admin from "layouts/Admin";

import { useRouter } from 'next/router';
import NewOrder from "../../components/NewOrder";
export default function Tables() {

  return (
    <>
      <div className="flex flex-wrap mt-4">
      </div>
      <NewOrder />
    </>
  );
}


Tables.layout = Admin;