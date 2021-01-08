import React, { useEffect, useState } from "react";

import { useAuth } from 'hooks/useAuth';

import { db } from 'config/firebase';



// layout for page

import Admin from "layouts/Admin.js";


import { useRouter } from 'next/router';
import { OrderDetailsComponent } from "components/OrderDetailsComponent";


import OrderDetailsTable from "components/cards/OrderDetailsTable";


const OrderDetails = () => { 
  const router = useRouter();
  const [darkVersion, setDarkVersion] = useState(false);
  const { id } = router.query;
  const changeTheme = (e) => { 
    if (e.target.checked) {
      setDarkVersion(true)
    }
    else {
      setDarkVersion(false)
    }
  }
  return (
    <>
      <div className="flex items-center justify-right w-full mb-24 flex-row-reverse">
        <label
          htmlFor="toogleA"
          className="flex items-center cursor-pointer"
        >
          <div className="relative">
            <input id="toogleA" type="checkbox" className="hidden" onChange ={(e) => changeTheme(e)} />
            <div
              className="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"
            ></div>
            <div
              className="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0"
            ></div>
          </div>
          <div
            className="ml-3 text-gray-700 font-medium"
          >
            Switch to { darkVersion ? 'Light Mode' : 'Dark Mode'}
    </div>
        </label>
      </div>
      {darkVersion ? <OrderDetailsTable color="dark" data={id} /> : <OrderDetailsTable data={id} />}
    </ >
  );

}
export default OrderDetails;


OrderDetails.layout = Admin;