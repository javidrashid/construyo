import React, { useEffect, useState } from "react";

import { useAuth } from 'hooks/useAuth';

import { db } from 'config/firebase';



// layout for page

import Admin from "layouts/Admin.js";


import { useRouter } from 'next/router';
import { OrderDetailsEditComponent } from "components/OrderDetailsEditComponent";




const OrderEdit = () => {
  const router = useRouter();

  const {id} = router.query
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