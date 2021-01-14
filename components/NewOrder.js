import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useRouter } from "next/router";
import { useForm } from 'react-hook-form';


import "react-datepicker/dist/react-datepicker.css";

import { db } from "../config/firebase";

const NewOrder = () => {
  const { register, errors, handleSubmit } = useForm();
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

  const onSubmit = (data) => {
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
    <form onSubmit={handleSubmit(onSubmit)}>
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
          name="title"
          ref={register({
          required: 'Please enter a title',
          minLength: {
            value: 10,
            message: 'Should have at least 10 characters',
          },
          })}
        />
        {errors.title && (
          <div className="mt-2 text-xs text-red-600">
          {errors.title.message}
          </div>
        )}
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
      
      <div className="customer-info  sm:block md:flex">
        <div className="relative mb-3 p-4 pl-0 sm:w-full md:w-1/3 lg:w-1/3">
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
            name="name"
            ref={register({
              required: 'Please enter a name',
              minLength: {
                value: 6,
                message: 'Should have at least 6 characters',
              },
              })}
            />
            {errors.name && (
              <div className="mt-2 text-xs text-red-600">
              {errors.name.message}
              </div>
            )}
        
        </div>
        <div className="relative mb-3 p-4 pl-0 sm:w-full md:w-1/3 lg:w-1/3">
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
            name="email"
            ref={register({
              required: 'Please enter an Email',
              minLength: {
                value: 6,
                message: 'Should have at least 6 characters',
              },
              })}
            />
            {errors.email && (
              <div className="mt-2 text-xs text-red-600">
              {errors.email.message}
              </div>
            )}
          
        </div>
        <div className="relative mb-3 p-4 pl-0 sm:w-full md:w-1/3 lg:w-1/3">
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
            name="phone"
            ref={register({
              required: 'Please enter a Phone No.',
              minLength: {
                value: 10,
                message: 'Should have the minimum 10 numbers',
              },
              })}
            />
            {errors.phone && (
              <div className="mt-2 text-xs text-red-600">
              {errors.phone.message}
              </div>
            )}
        </div>
      </div>
      <div className="address-container sm:block md:flex">
        <div className="relative mb-3 p-4 pl-0 sm:w-full md:w-1/3 lg:w-1/3">
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
            name="city"
            ref={register({
              required: 'Please enter a City Name',
              minLength: {
                value: 5,
                message: 'Should have the minimum 5 numbers',
              },
              })}
            />
            {errors.city && (
              <div className="mt-2 text-xs text-red-600">
              {errors.city.message}
              </div>
            )}
        </div>
        <div className="relative mb-3 p-4 pl-0 sm:w-full md:w-1/3 lg:w-1/3">
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
            name="country"
            onChange={({ target }) => setCountry(target.value)}
            ref={register({
              required: 'Please enter a Country Name',
              minLength: {
                value: 5,
                message: 'Should have the minimum 5 numbers',
              },
              })}
            />
            {errors.country && (
              <div className="mt-2 text-xs text-red-600">
              {errors.country.message}
              </div>
            )}
        </div>
        <div className="relative mb-3 p-4 pl-0 sm:w-full md:w-1/3 lg:w-1/3">
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
            name="street"
            ref={register({
              required: 'Please enter a Street Name',
              minLength: {
                value: 5,
                message: 'Should have the minimum 5 numbers',
              },
              })}
            />
            {errors.street && (
              <div className="mt-2 text-xs text-red-600">
              {errors.street.message}
              </div>
            )}
         
        </div>
        <div className="relative mb-3 p-4 pl-0 sm:w-full md:w-1/3 lg:w-1/3">
          <label
            className="block uppercase text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-password"
          >
            Zip
          </label>
          <input
            type="number"
            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
            placeholder="Zip"
            onChange={({ target }) => setZip(target.value)}
            name="zip"
            ref={register({
              required: 'Please enter a Zip Code',
              })}
            />
            {errors.zip && (
              <div className="mt-2 text-xs text-red-600">
              {errors.zip.message}
              </div>
            )}
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
