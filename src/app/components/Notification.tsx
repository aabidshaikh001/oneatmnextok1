'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import { IoMdDownload } from "react-icons/io";

function Notification() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null; // Don't render if notification is dismissed
  }

  return (
    <div className="flex items-center fixed bottom-2 right-0 justify-between bg-gray-100 rounded-full px-5 py-3 shadow-lg max-w-lg mx-auto mt-5">
      <Image src='/logo.png' alt="App Logo" className=" mr-3" width={50} height={100} />
      <div className="flex-grow">
        <p className="text-gray-700 font-medium">Download One Atm App to Pay from anywhere</p>
      </div>
     
        <a href="https://in.tapir.co.in/uploads/logo/oneatm_v1.apk"download={"https://in.tapir.co.in/uploads/logo/oneatm_v1.apk"} className='bg-blue-800 text-white rounded-full px-4 py-2 font-medium flex justify-center gap-1 items-center text-sm hover:bg-blue-700' >Download <IoMdDownload size={18} /></a>

      <button className="ml-4 text-gray-500 hover:text-gray-900" onClick={handleClose}>
        X
      </button>
    </div>
  );
}

export default Notification;
