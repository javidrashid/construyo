import React , { useState, useEffect } from "react";
import Link from 'next/link';

import { db } from "../../config/firebase";
import PropTypes from "prop-types";

import { useRouter } from 'next/router';
// components

import TableDropdown from "components/Dropdowns/TableDropdown.js";

export default function OrderDetailsTable({ color , props}) {
 console.log('My props', props);


  const router = useRouter();
  const { id } = router.query;

  const [orderDetails, setOrderDetails] = useState('');
  var docRef = db.collection("orders").doc(id);

  useEffect(() => {
    docRef.get().then(function (doc) {
      if (doc.exists) {
        console.log("Document data:", doc.data());
        setOrderDetails(doc.data())
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }).catch(function (error) {
      console.log("Error getting document:", error);
    });

  }, [])

  const updateOrder = (e) => {
    console.log('Fired updateOrder', e);
    router.push(`/orders/edit/${id}`)

  }
  const deleteThisOrder = (e) => {
    console.log('Fired updateOrder', e);
    db.collection('orders').doc(id).delete().then(function() {
      console.log("Document successfully deleted!");
    })
    router.push(`/orders/`);

  }



  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-gray-800 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-gray-800" : "text-white")
                }
              >
                Card Tables 
                              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-gray-100 text-gray-600 border-gray-200"
                      : "bg-gray-700 text-gray-300 border-gray-600")
                  }
                >
                  Title 1
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-gray-100 text-gray-600 border-gray-200"
                      : "bg-gray-700 text-gray-300 border-gray-600")
                  }
                >
                  Date
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-gray-100 text-gray-600 border-gray-200"
                      : "bg-gray-700 text-gray-300 border-gray-600")
                  }
                >
                  Address11
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-gray-100 text-gray-600 border-gray-200"
                      : "bg-gray-700 text-gray-300 border-gray-600")
                  }
                >
                  Customer
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-gray-100 text-gray-600 border-gray-200"
                      : "bg-gray-700 text-gray-300 border-gray-600")
                  }
                >
                  Update This Order
                </th>
               
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-gray-100 text-gray-600 border-gray-200"
                      : "bg-gray-700 text-gray-300 border-gray-600")
                  }
                >Delete This Order</th>
              </tr>
            </thead>
            <tbody>
              
                <tr>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex items-center">
             
                  <span
                    className={
                      "ml-3 font-bold " +
                      +(color === "light" ? "text-gray-700" : "text-white")
                    }
                  >
                    {orderDetails.title}
                  </span>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                {orderDetails.bookingdate}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  <i className="fas fa-circle text-orange-500 mr-2"></i> {orderDetails.address} 
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                {orderDetails.customer}
                </td>
                
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left">
                <button  className="bg-green-500 text-white active:bg-green-900 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1" type="button" style={{"transition": "all .15s ease"}} onClick={(e) => updateOrder(e)}>
  Update
</button>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left">
                <button className="bg-red-500 text-white active:bg-red-900 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1" type="button" style={{"transition": "all .15s ease"}} onClick={(e) => deleteThisOrder(e)}>
  Delete
</button>
                </td>
              </tr>
           
              
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

OrderDetailsTable.defaultProps = {
  color: "light",
};

OrderDetailsTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
