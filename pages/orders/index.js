import React, { useState, useEffect } from "react";

// import { useAuth } from 'hooks/useAuth';
import { useAuth } from 'hooks/useAuth';

import { db } from '../../config/firebase';
// components

import CardTable from "components/Cards/CardTable.js";

// layout for page

import Admin from "layouts/Admin.js";
import LoginForm from "components/Forms/LoginForm";

import { useRouter } from 'next/router';
export default function Orders(props) {
  console.log('Hello Orders props', props);
  const auth = useAuth();

  const router = useRouter();

  if (!auth.user)  {
    return null;
  }

  if (auth.user)  {
    Orders.layout = Admin;
      //router.push('/login')
  }
  return (
      <div className="flex flex-wrap mt-4">111
        <div className="w-full mb-12 px-4">
          This is test
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        {`You are logged in with ${auth.user.email}`}
        </h2>
        <p className="mt-2 text-center text-md text-gray-600">
          {`You are logged in with ${auth.user.name}`}
        </p>
          <CardTable />
        </div>
        <div className="w-full mb-12 px-4">
          <CardTable color="dark" />
       </div>
       </div>
  
  );
}


Orders.layout = Admin;