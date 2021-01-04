import React, { useState, useEffect } from 'react';
import { db } from '../config/firebase';


import { useRouter } from "next/router";




export const OrderDetailsEditComponent = (props) => {
        const router = useRouter();
        const { id } = router.query;

        const [title, setTitle] = useState('');
        const [bookingdate, setBookingDate] = useState('');
        const [address, setAddress] = useState('');
        const [customer, setCustomer] = useState('');

        const [newtitle, setNewtitle] = useState('');
        var docRef = db.collection("orders").doc(id);

        useEffect(() => {
                docRef.get().then(function (doc) {
                        if (doc.exists) {
                                console.log("Document data:", doc.data());
                                setTitle(doc.data().title)
                                setBookingDate(doc.data().bookingdate)
                                setAddress(doc.data().address)
                                setCustomer(doc.data().customer)
                        } else {
                                console.log("No such document!");
                        }
                }).catch(function (error) {
                        console.log("Error getting document:", error);
                });

        }, [])

        const upDateOrders = (e) => {
                e.preventDefault();
                db.collection("orders").doc(id).update({ title, bookingdate, address, customer }).then(function () {
                        console.log('Update successfull, sending you to the dashboard page...');

                })
                router.push('/orders');
        }

        const cancelAndReturnToOrders = (e) => {
                e.preventDefault();
                alert('cancel');
                router.push('/orders');

        }
        return (
                <>
                        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                <div className="text-gray-500 text-center mb-3 font-bold"><small>11Details of CUstomert with ID {id}</small></div>


                                <div className="flex flex-wrap items-top mb-6">
                                        <div className="w-full lg:w-6/12 px-4"><span
                                                className="block uppercase text-gray-600 text-sm font-semibold mb-2">Useful Links</span>
                                                <ul className="list-unstyled">
                                                        <li className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm w-full px-3 py-2">Title</li>
                                                        <li className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm w-full px-3 py-2">Booking Date</li>
                                                        <li className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm w-full px-3 py-2">Address</li>
                                                        <li className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm w-full px-3 py-2">Customer</li>
                                                </ul>
                                        </div>
                                        <div className="w-full lg:w-6/12 px-4"><span className="block uppercase text-gray-600 text-sm font-semibold mb-2">Other
            Resources</span>
                                                <ul className="list-unstyled">
                                                        <li className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm">
                                                                <input id="title" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 shadow-sm" type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                                                        </li>
                                                        <li className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm">
                                                                <input id="bookingdate" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 shadow-sm" type="text" name="bookingdate" value={bookingdate} onChange={(e) => setBookingDate(e.target.value)} />


                                                        </li>
                                                        <li className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm">
                                                                <input id="address" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 shadow-sm" type="text" name="address" value={address} onChange={(e) => setAddress(e.target.value)} />

                                                        </li>
                                                        <li className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm">
                                                                <input id="customer" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 shadow-sm" type="text" name="customer" value={customer} onChange={(e) => setCustomer(e.target.value)} />

                                                        </li>


                                                </ul>

                                        </div>
                                        <div className="w-full">
                                                <button type="submit" className="w-half w-64 ml-8  justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out" onClick={(e) => upDateOrders(e)}>Update</button>
                                                <button type="submit" className="w-half w-64 ml-8  justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out" onClick={(e) => cancelAndReturnToOrders(e)}>Cancel</button>
                                        </div>
                                </div>
                        </div>
                </>
        )
}


