import React, { useEffect, useState } from "react";

import { useRequireAuth } from 'hooks/useRequireAuth';

import { db } from 'config/firebase';



// layout for page

import Admin from "layouts/Admin.js";


import { useRouter } from 'next/router';
import { OrderDetailsEditComponent } from "components/OrderDetailsEditComponent";




const OrderEdit = () => {
    const auth = useRequireAuth();
  const router = useRouter();

  const {id} = router.query;

  if (!auth.user)  {
    return null;
  }

  if (auth.user)  {
    //Orders.layout = Admin;
      //router.push('/login')
      alert('You are an authorised user');
  }
  else {
    alert('You are an an UNauthorised user');
  }

  return (
    <>
  {/* <OrderDetailsComponent /> <br />< br/> <br />< br/> <br />< br/> <br />< br/> */}
  <h1> This is Edit Orders Page Hello Inside ID FILE ID is {id} </h1> <br />< br/> <br />< br/> <br />< br/> <br />< br/>
 
    <OrderDetailsEditComponent id={id}/>
</ >
);
  
}



export default OrderEdit;


OrderEdit.layout = Admin;