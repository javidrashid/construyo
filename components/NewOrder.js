import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useRouter } from "next/router";

import "react-datepicker/dist/react-datepicker.css";

import { db } from "../config/firebase";

const NewOrder = () => {
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [street, setStreet] = useState("");
  const [zip, setZip] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [bookingdate, setBookingdate] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    console.log("bookingdate", startDate.toString());
    e.preventDefault();
    setBookingdate();

    db.collection("orders").add({
      title: title,
      bookingdate: startDate.toString(),
      city: city,
      country: country,
      street: street,
      zip: zip,
      name: name,
      phone: phone,
      email: email,
    });
    setTitle("");
    //setBookingdate('');
    setCity("");
    setName("");
    setEmail("");
    setPhone("");
    router.push("/orders");
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="relative w-full mb-3">
        <label
          className="block uppercase text-gray-700 text-xs font-bold mb-2"
          htmlFor="grid-password"
        >
          Title
        </label>
        <input
          type="text"
          className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
          placeholder="Title"
          onChange={({ target }) => setTitle(target.value)}
        />
      </div>

      <div className="relative w-full mb-3">
        <label
          className="block uppercase text-gray-700 text-xs font-bold mb-2"
          htmlFor="grid-password"
        >
          Booking Date
        </label>

        <DatePicker
          className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="MM/dd/yyyy"
        />
      </div>
      
      <div className="customer-info flex">
        <div className="relative w-1/3 mb-3 p-4 pl-0">
          <label
            className="block uppercase text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-password"
          >
            Name
          </label>
          <input
            type="text"
            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
            placeholder="Name"
            onChange={({ target }) => setName(target.value)}
          />
        </div>
        <div className="relative w-1/3 p-4 mb-3">
          <label
            className="block uppercase text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-password"
          >
            Email
          </label>
          <input
            type="text"
            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
            placeholder="Email"
            onChange={({ target }) => setEmail(target.value)}
          />
        </div>
        <div className="relative w-1/3 mb-3 p-4 pr-0">
          <label
            className="block uppercase text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-password"
          >
            Phone
          </label>
          <input
            type="text"
            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
            placeholder="Phone"
            onChange={({ target }) => setPhone(target.value)}
          />
        </div>
      </div>
      <div className="address-container flex">
        <div className="relative w-1/4 mb-3 p-4  pl-0">
          <label
            className="block uppercase text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-password"
          >
            City
          </label>
          <input
            type="text"
            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
            placeholder="City"
            onChange={({ target }) => setCity(target.value)}
          />
        </div>
        <div className="relative w-1/4 mb-3 p-4">
          <label
            className="block uppercase text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-password"
          >
            Country
          </label>
          <input
            type="text"
            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
            placeholder="Country"
            onChange={({ target }) => setCountry(target.value)}
          />
        </div>
        <div className="relative w-1/4 mb-3 p-4">
          <label
            className="block uppercase text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-password"
          >
            Street
          </label>
          <input
            type="text"
            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
            placeholder="Street"
            onChange={({ target }) => setStreet(target.value)}
          />
        </div>
        <div className="relative w-1/4 mb-3 p-4 pr-0">
          <label
            className="block uppercase text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-password"
          >
            Zip
          </label>
          <input
            type="text"
            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
            placeholder="Zip"
            onChange={({ target }) => setZip(target.value)}
          />
        </div>
      </div>
      <div className="text-center mt-6">
        <button
          className="bg-green-900 text-white active:bg-green-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
          type="submit"
        >
          Create An Order
        </button>
      </div>
    </form>
  );
};

export default NewOrder;
