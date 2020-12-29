import React, { useEffect, useState } from "react";

import { useAuth } from 'hooks/useAuth';

import { db } from 'config/firebase';



// layout for page

import Admin from "layouts/Admin.js";


import { useRouter } from 'next/router';
import { OrderDetailsComponent } from "components/OrderDetailsComponent";




const OrderDetails = () => {
  const router = useRouter();

  const {id} = router.query
  return (
    <>
  {/* <OrderDetailsComponent /> <br />< br/> <br />< br/> <br />< br/> <br />< br/> */}
  <h1> Hello Inside ID FILE ID is {id} </h1> <br />< br/> <br />< br/> <br />< br/> <br />< br/>
 
    <OrderDetailsComponent id={id}/>
</ >
);
  
}

// export const getServerSideProps = async ({ query }) => { 
//   const content = []
//   await db
//     .collection('orders')
//     .doc(query.id)
//     .get()
//     .then(result => {
//       content.push(result)
//     });
//     return content;
// }


export default OrderDetails;


OrderDetails.layout = Admin;