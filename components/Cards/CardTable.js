import React , { useState, useEffect } from "react";

import { db } from "../../config/firebase";
import PropTypes from "prop-types";
// components

import TableDropdown from "components/Dropdowns/TableDropdown";

export default function CardTable({ color , props}) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    db
      .collection('orders')
      .onSnapshot(snap => { 
        const orders = snap.docs.map(order => ({
          id: order.id,
          title: order.data().title,
          email: order.data().email,
          name: order.data().name,
          phone: order.data().phone,
          city : order.data().city,
          country : order.data().country,
          street : order.data().street,
          zip : order.data().zip,
          bookingdate : order.data().bookingdate,
          customer : order.data().customer
        }));
        setOrders(orders);
      });
  }, []);

  console.log('orders are 1' , orders);


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
                Construyo Orders
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
                  Title
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
                  Address
                </th>
               
               
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-gray-100 text-gray-600 border-gray-200"
                      : "bg-gray-700 text-gray-300 border-gray-600")
                  }
                ></th>

              </tr>
            </thead>
            <tbody>
              {orders.map(elem => (
                <tr key={elem.id}>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex items-center">
             
                  <span
                    className={
                      "ml-3 font-bold " +
                      +(color === "light" ? "text-gray-700" : "text-white")
                    }
                  >
                    {elem.title}
                  </span>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                {elem.bookingdate }
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                 {elem.email}<br />{elem.name} <br />{elem.phone}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                {elem.city} <br />{elem.country} <br />{elem.street}<br /> {elem.zip}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left">
                  <TableDropdown id={elem.id} props =  {elem} />
                </td>
              </tr>
              ))}
              
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

CardTable.defaultProps = {
  color: "light",
};

CardTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
