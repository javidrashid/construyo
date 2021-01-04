import React, { useState, useEffect } from "react";

// import { useAuth } from 'hooks/useAuth';
import { useRequireAuth } from 'hooks/useRequireAuth';

import { db } from '../../config/firebase';
// components

import CardTable from "components/Cards/CardTable.js";

// layout for page

import Admin from "layouts/Admin.js";
import LoginForm from "components/Forms/LoginForm";

import { useRouter } from 'next/router';
export default function Orders(props) {
  console.log('Hello Orders props', props);
  const auth = useRequireAuth();

  const router = useRouter();

  if (!auth.user)  {
    return null;
  }

  if (auth.user)  {
    Orders.layout = Admin;
      //router.push('/login')
  }
  return (
      <div className="flex flex-wrap mt-4">
        {/* <div className="w-full mb-12 px-4">
         <CardTable />
        </div> */}
        <div className="w-full mb-12 px-4">
          <CardTable color="dark" />
       </div>
       </div>
  
  );
}


Orders.layout = Admin;