import React from "react";
import { FaSearch } from "react-icons/fa"; // Import the search icon from react-icons

export const Navbar = ({ handleLogout }) => {
  return (
    <div className="flex justify-between items-center p-3 bg-white shadow-lg">
      <div className="flex items-center">
        {/* Search Bar */}
        <div className="flex items-center w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500">
          {/* Search Icon */}
          <FaSearch className="mr-2 text-gray-500" />
          <input
            type="text"
            placeholder="Search here..."
            className="w-full p-1 focus:outline-none"
          />
        </div>
      </div>

      {/* Log Out Button */}
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-6 py-2 rounded-lg flex items-center"
      >
        Log Out
      </button>
    </div>
  );
};
