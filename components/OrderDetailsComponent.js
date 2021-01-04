// import React, { useState, useEffect } from 'react';
// import { db } from '../config/firebase';


// import { useRouter } from "next/router";




// export const OrderDetailsComponent = (props) => {
//   const router = useRouter();
//   const { id } = router.query;

//   const [orderDetails, setOrderDetails] = useState('');
//   var docRef = db.collection("orders").doc(id);

//   useEffect(() => {
//     docRef.get().then(function (doc) {
//       if (doc.exists) {
//         console.log("Document data:", doc.data());
//         setOrderDetails(doc.data())
//       } else {
//         // doc.data() will be undefined in this case
//         console.log("No such document!");
//       }
//     }).catch(function (error) {
//       console.log("Error getting document:", error);
//     });

//   }, [])


//   return (
//     <>
//       <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
//     <div className="text-gray-500 text-center mb-3 font-bold"><h1>22Details of CUstomert with ID {id}</h1></div>

    
//     <div class="flex flex-wrap items-top mb-6" style={{border:"1px solid red" , display:"none"}}>
//     <div class="w-full lg:w-6/12 px-4"><span
//             class="block uppercase text-gray-600 text-sm font-semibold mb-2">Useful Links</span>
//         <ul class="list-unstyled">
//             <li><a class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
//                     href="https://www.creative-tim.com/presentation?ref=nnjs-footer">Title</a></li>
//             <li><a class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
//                     href="https://blog.creative-tim.com?ref=nnjs-footer">Booking Date</a></li>
//             <li><a class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
//                     href="https://www.github.com/creativetimofficial?ref=nnjs-footer">Address</a></li>
//             <li><a class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
//                     href="https://www.creative-tim.com/bootstrap-themes/free?ref=nnjs-footer">Customer</a></li>
//         </ul>
//     </div>
//     <div class="w-full lg:w-6/12 px-4"><span class="block uppercase text-gray-600 text-sm font-semibold mb-2">Other
//             Resources</span>
//         <ul class="list-unstyled">
//             <li><a class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
//                     href="https://github.com/creativetimofficial/notus-nextjs/blob/master/LICENSE.md?ref=nnjs-footer">{orderDetails.title}</a></li>
//             <li><a class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
//                     href="https://creative-tim.com/terms?ref=nnjs-footer">{orderDetails.bookingdate}</a></li>
//             <li><a class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
//                     href="https://creative-tim.com/privacy?ref=nnjs-footer">{orderDetails.address}</a></li>
//             <li><a class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
//                     href="https://creative-tim.com/contact-us?ref=nnjs-footer">{orderDetails.customer}</a></li>
//         </ul>
//     </div>
// </div>


//     <form style={{display:"none"}}>
//         <div className="rounded-md shadow-sm">
//               <label for="title"
//                   className="inline text-sm font-medium leading-5 text-gray-700">Title111
//                 <p
//                   className=" text-lg font-medium leading-5 text-gray-700">{orderDetails.title}</p> 
//                   </label>
//                 </div>
//         <div className="mt-6"><label for="email" className="block text-sm font-medium leading-5 text-gray-700">Booking Date</label>
//             <div className="mt-1 rounded-md shadow-sm"><input type="email" id="email"
//                     className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
//                     name="email" /></div>
//         </div>
//         <div className="mt-6"><label for="address"
//                 className="block text-sm font-medium leading-5 text-gray-700">Address</label>
//             <div className="mt-1 rounded-md shadow-sm"><input type="password" id="address"
//                     className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
//                     name="password" /></div>
//         </div>
//         <div className="mt-6"><label for="customer"
//             className="block text-sm font-medium leading-5 text-gray-700">Customer</label>
//         <div className="mt-1 rounded-md shadow-sm"><input type="password" id="customer"
//                 className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
//                 name="password" /></div>
//     </div>
//         <div className="mt-6"><span className="block w-half rounded-md shadow-sm"><button type="submit"
//                     className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">OK</button></span></div>
//     </form>
// </div>
//     </>
//   )
// }


