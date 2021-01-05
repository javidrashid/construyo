

import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import {useRouter} from "next/router";

import "react-datepicker/dist/react-datepicker.css";

import {db} from '../config/firebase';

  const NewOrder = () => {
    const [title, setTitle] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [address, setAddress] = useState('');
    const [customer, setCustomer] = useState('');

    const [bookingdate, setBookingdate] = useState('');
    const router = useRouter();

    const handleSubmit = (e) => {
      console.log('bookingdate', startDate.toString());
      e.preventDefault();
      setBookingdate();
      console.log({
        "title": title,
        "bookingdate": bookingdate,
        "address": address,
        "customer": customer
      });

        db
            .collection('orders')
            .add({
                title: title,
                bookingdate: startDate.toString(),
                address: address,
                customer: customer
            })
      setTitle('');
      //setBookingdate('');
      setAddress('');
      setCustomer('');
      router.push('/orders');
    }

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
          
         <DatePicker className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150" selected={startDate} onChange={date => setStartDate(date) }  dateFormat="MM/dd/yyyy" />

        </div>

        <div className="relative w-full mb-3">
          <label
            className="block uppercase text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-password"
          >
            Address
                    </label>
          <input
            type="text"
            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
            placeholder="Address"
            onChange={({ target }) => setAddress(target.value)}
          />
        </div>

        <div className="relative w-full mb-3">
          <label
            className="block uppercase text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-password"
          >
            Customer
                    </label>
          <input
            type="text"
            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
            placeholder="Customer"
            onChange={({ target }) => setCustomer(target.value)}
          />
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

  }

  export default NewOrder;