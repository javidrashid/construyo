import React from "react";
import { createPopper } from "@popperjs/core";
import Link from 'next/link';

import { db } from '../../config/firebase';

const NotificationDropdown = (props) => {
  // dropdown props
  console.log('TableDropDown Props', props);
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "left-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  const deleteThisOrder = (e , id) => {
    confirm('Are you Sure, Need to implement a notification service here...') ? 
    db.collection('orders').doc(id).delete().then(function() {
      console.log("Document successfully deleted!");
    })
    : alert("Not Deleted");
  }
  return (
    <>
      <a
        className="text-gray-600 py-1 px-3"
        href="#"
        ref={btnDropdownRef}
        onMouseEnter={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
        onMouseLeave={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? openDropdownPopover() : closeDropdownPopover();
        }}
      >
        <i className="fas fa-ellipsis-v"></i>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <Link href="/orders/[:id]" as={'/orders/' + props.id}>
        <a
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
          }
        
        >
           View Order 
        </a>
        </Link>
        <Link href="/orders/edit/[:id]" as={'/orders/edit/' + props.id}>
        <a
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
          }
          
        >
            Edit This Order
        </a>
        </Link>
        <Link href="#">
        <a
        className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
          }
          onClick={(e) => deleteThisOrder(e, props.id)}
        >
          Delete This Order
        </a>
        </Link>
      </div>
    </>
  );
};

export default NotificationDropdown;
