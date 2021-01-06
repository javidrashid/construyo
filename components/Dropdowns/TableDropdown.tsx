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

  const deleteThisOrder = (e, id) => {
    confirm('Sure') ? 
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
       
        <a
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
          }
          onClick={(e) => e.preventDefault()}
        >
           <Link href="/orders/[:id]" as={'/orders/' + props.id}> View Order </Link>
        </a>
        
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
          }
          onClick={(e) => e.preventDefault()}
        >
           <Link href="/orders/edit/[:id]" as={'/orders/edit/' + props.id}> Edit This Order </Link>
        </a>
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
          }
          onClick={(e, id) => deleteThisOrder(e, props.id)}
        >
          Delete This Order
        </a>
      </div>
    </>
  );
};

export default NotificationDropdown;
