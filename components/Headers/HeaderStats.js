import React from "react";

import {useRequireAuth} from '../../hooks/useRequireAuth';



export default function HeaderStats() {
  const auth = useRequireAuth();

  if (!auth.user) return null;
  return (
    <>
      {/* Header */}
      <div className="relative bg-gray-900 md:pt-32 pb-32 pt-4">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap text-white font-semibold text-4xl">
              <h1 className="">Welcome  {auth.user.name}</h1> < hr />
              <p>You are logged in with  {auth.user.email} </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
