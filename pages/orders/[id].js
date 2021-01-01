import React, { useEffect, useState } from "react";

import { useAuth } from 'hooks/useAuth';

import { db } from 'config/firebase';



// layout for page

import Admin from "layouts/Admin.js";


import { useRouter } from 'next/router';
import { OrderDetailsComponent } from "components/OrderDetailsComponent";

import CardTable from "components/cards/CardTable";

import OrderDetailsTable from "components/cards/OrderDetailsTable";


const OrderDetails = () => {
  const router = useRouter();

  const {id} = router.query
  return (
    <>
  {/* <OrderDetailsComponent /> <br />< br/> <br />< br/> <br />< br/> <br />< br/> */}
    <CardTable color="dark" />
    <OrderDetailsComponent id={id}/>

    <OrderDetailsTable color="dark"  data = {id}/>
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