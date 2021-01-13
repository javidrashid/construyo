import React, { useState, useEffect } from "react";
import { db } from "../config/firebase";

import { useRouter } from "next/router";

export const OrderDetailsEditComponent = (props) => {
  const router = useRouter();
  const { id } = router.query;
  const [title, setTitle] = useState("");
  const [bookingdate, setBookingDate] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [street, setStreet] = useState("");
  const [zip, setZip] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  var docRef = db.collection("orders").doc(id);

  useEffect(() => {
    docRef
      .get()
      .then(function (doc) {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          setTitle(doc.data().title);
          setBookingDate(doc.data().bookingdate), setCity(doc.data().city);
          setCountry(doc.data().country);
          setStreet(doc.data().street);
          setZip(doc.data().zip);
          setName(doc.data().name);
          setPhone(doc.data().phone);
          setEmail(doc.data().email);
        } else {
          console.log("No such document!");
        }
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
  }, []);

  const upDateOrders = (e) => {
    e.preventDefault();
    db.collection("orders")
      .doc(id)
      .update({
        title,
        bookingdate,
        city,
        country,
        street,
        zip,
        name,
        phone,
        email,
      })
      .then(function () {
        console.log("Update successfull, sending you to the dashboard page...");
      });
    router.push("/orders");
  };

  const cancelAndReturnToOrders = (e) => {
    e.preventDefault();
    router.push("/orders");
  };
  return (
    <>
      <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
        <table className="items-center w-full bg-transparent border-collapse">
          <thead>
            <tr>
              <th
                colSpan="2"
                class=" px-6 align-middle  py-3 text-lg whitespace-no-wrap font-semibold text-center  rounded  border-gray-600 bg-pink-600 text-white"
              >
                Details of Customert with ID {id}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                className={
                  " px-6 align-middle  py-3 text-xs uppercase  whitespace-no-wrap font-semibold text-left  border-gray-600"
                }
              >
                Title
              </td>
              <td className=" px-6 align-middle  py-3 text-xs uppercase  whitespace-no-wrap font-semibold text-left  border-gray-600">
                <input
                  id="title"
                  className=" block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 shadow-sm"
                  type="text"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td
                className={
                  " px-6 align-middle  py-3 text-xs uppercase  whitespace-no-wrap font-semibold text-left  border-gray-600"
                }
              >
                Booking Date
              </td>
              <td className=" px-6 align-middle  py-3 text-xs uppercase  whitespace-no-wrap font-semibold text-left  border-gray-600">
                <input
                  id="bookingdate"
                  className=" block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 shadow-sm"
                  type="text"
                  name="bookingdate"
                  value={bookingdate}
                  onChange={(e) => setBookingDate(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td
                className={
                  " px-6 align-middle  py-3 text-xs uppercase  whitespace-no-wrap font-semibold text-left  border-gray-600"
                }
              >
                Name
              </td>
              <td className=" px-6 align-middle  py-3 text-xs uppercase  whitespace-no-wrap font-semibold text-left  border-gray-600">
                <input
                  id="name"
                  className=" block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 shadow-sm"
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td
                className={
                  " px-6 align-middle  py-3 text-xs uppercase  whitespace-no-wrap font-semibold text-left  border-gray-600"
                }
              >
                Phone
              </td>
              <td className=" px-6 align-middle  py-3 text-xs uppercase  whitespace-no-wrap font-semibold text-left  border-gray-600">
                <input
                  id="phone"
                  className=" block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 shadow-sm"
                  type="text"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td
                className=
                  " px-6 align-middle  py-3 text-xs uppercase  whitespace-no-wrap font-semibold text-left  border-gray-600"
                
              >
                Email
              </td>
              <td className=" px-6 align-middle  py-3 text-xs uppercase  whitespace-no-wrap font-semibold text-left  border-gray-600">
                <input
                  id="email"
                  className=" block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 shadow-sm"
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td
                className={
                  " px-6 align-middle  py-3 text-xs uppercase  whitespace-no-wrap font-semibold text-left  border-gray-600"
                }
              >
                City
              </td>
              <td className=" px-6 align-middle  py-3 text-xs uppercase  whitespace-no-wrap font-semibold text-left  border-gray-600">
                <input
                  id="address"
                  className=" block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 shadow-sm"
                  type="text"
                  name="address"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td
                className={
                  " px-6 align-middle  py-3 text-xs uppercase  whitespace-no-wrap font-semibold text-left  border-gray-600"
                }
              >
                Country
              </td>
              <td className=" px-6 align-middle  py-3 text-xs uppercase  whitespace-no-wrap font-semibold text-left  border-gray-600">
                <input
                  id="address"
                  className=" block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 shadow-sm"
                  type="text"
                  name="address"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td
                className={
                  " px-6 align-middle  py-3 text-xs uppercase  whitespace-no-wrap font-semibold text-left  border-gray-600"
                }
              >
                Street
              </td>
              <td className=" px-6 align-middle  py-3 text-xs uppercase  whitespace-no-wrap font-semibold text-left  border-gray-600">
                <input
                  id="address"
                  className=" block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 shadow-sm"
                  type="text"
                  name="address"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td
                className={
                  " px-6 align-middle  py-3 text-xs uppercase  whitespace-no-wrap font-semibold text-left  border-gray-600"
                }
              >
                Zip
              </td>
              <td className=" px-6 align-middle  py-3 text-xs uppercase  whitespace-no-wrap font-semibold text-left  border-gray-600">
                <input
                  id="address"
                  className=" block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 shadow-sm"
                  type="text"
                  name="address"
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td className=" px-6 align-middle  py-3 text-xs uppercase  whitespace-no-wrap font-semibold   border-gray-600 text-left">
               
              </td>
              <td className=" px-6 align-middle  py-3 text-xs uppercase  whitespace-no-wrap font-semibold   border-gray-600 text-left">
                <button
                  className="bg-red-500 text-white active:bg-red-900 font-bold uppercase text-xs px-4 py-2 w-1/2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                  style={{ transition: "all .15s ease" }}
                  onClick={(e) => cancelAndReturnToOrders(e)}
                >
                  Cancel and Return to Orders
                </button>
                <button
                  className="bg-green-500 text-white active:bg-green-900 font-bold uppercase text-xs px-4 py-2 w-1/2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                  style={{ transition: "all .15s ease" }}
                  onClick={(e) => upDateOrders(e)}
                >
                  Update
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <hr />
      </div>
    </>
  );
};
