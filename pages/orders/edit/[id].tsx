import React, { useEffect, useState } from "react";

import { useRequireAuth } from 'hooks/useRequireAuth';

import { db } from 'config/firebase';

import Admin from "layouts/Admin";


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
      alert('You are an authorised user');
  }
  else {
    alert('You are an an UNauthorised user');
  }
  return (
    <OrderDetailsEditComponent id={id}/>
  );
}
export default OrderEdit;

OrderEdit.layout = Admin;