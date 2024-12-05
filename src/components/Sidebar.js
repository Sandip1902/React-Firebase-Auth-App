import React from 'react';
import { FaHome, FaBell, FaShoppingCart, FaComments, FaWallet, FaCogs, FaUserCircle, FaCog } from 'react-icons/fa'; // Import icons

export const Sidebar = () => {
  return (
    <div className="w-1/6 bg-gray-50 text-gray-800 p-6">  
      <div className="text-5xl font-semibold mb-20">LOGO</div>
      <ul>
        <li className="mb-8 cursor-pointer flex items-center">
          <FaHome className="mr-2" /> Home
        </li>
        <li className="mb-8 cursor-pointer flex items-center">
          <FaBell className="mr-2" /> Notifications
        </li>
        <li className="mb-8 cursor-pointer flex items-center">
          <FaShoppingCart className="mr-2" /> Shop
        </li>
        <li className="mb-8 cursor-pointer flex items-center">
          <FaComments className="mr-2" /> Conversation
        </li>
        <li className="mb-8 cursor-pointer flex items-center">
          <FaWallet className="mr-2" /> Wallet
        </li>
        <li className="mb-8 cursor-pointer flex items-center">
          <FaCogs className="mr-2" /> Subscription
        </li>
        <li className="mb-8 cursor-pointer flex items-center">
          <FaUserCircle className="mr-2" /> My Profile
        </li>
        <li className="mb-8 cursor-pointer flex items-center">
          <FaCog className="mr-2" /> Settings
        </li>
      </ul>
    </div>
  );
};
