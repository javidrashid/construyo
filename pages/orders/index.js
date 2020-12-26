import React, { useEffect } from "react";

// import { useAuth } from 'hooks/useAuth';
import { useAuth } from 'hooks/useAuth';

// components

import CardTable from "components/Cards/CardTable.js";

// layout for page

import Admin from "layouts/Admin.js";
import LoginForm from "components/Forms/LoginForm";

import { useRouter } from 'next/router';
export default function Tables() {

  const auth = useAuth();

  const router = useRouter();


  // useEffect(() => {
  //   (async function() {
  //     console.log('User is', auth);
  //     if(!auth.user) {
  //       router.push('/login')
  //     }
  //     else {
  //       router.push('/tables')
  //     }
  //   })()
    
  // }, [])



  if (!auth.user)  {
    return null;
  }

  if (auth.user)  {
    Tables.layout = Admin;
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
          {`You are logged in with auth.user.email`}
        </p>
          <CardTable />
        </div>
        <div className="w-full mb-12 px-4">
          <CardTable color="dark" />

          <LoginForm />
         
        </div>
        <p>Some Text Here  You are logged in as {auth.user.name}</p>
        <button style={{ border: "1px solid red", background: "indigo" }}
          onClick={() => auth.signOut()}
          className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
        >
          Sign out
</button>


      </div>
  
  );
}


Tables.layout = Admin;