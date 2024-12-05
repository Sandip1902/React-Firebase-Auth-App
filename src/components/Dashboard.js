import React from "react";
import { FaSignOutAlt } from "react-icons/fa"; 
import {Sidebar} from "./Sidebar"; 
import {Navbar} from "./Navbar"; 
import {Feed} from "./Feed"; 
import { auth } from "../firebase"; 
import { signOut } from "firebase/auth"; 
import { useNavigate } from "react-router-dom"; 
import { UserProfile } from "./UserProfile"; 


const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        alert("Logged out successfully");
        navigate("/"); 
      })
      .catch((error) => {
        console.error("Error logging out: ", error);
        alert("Error logging out. Please try again.");
      });
  };

  return (
    <div className="flex">
       <Sidebar />

       <div className="flex-1 p-8 bg-gray-50">

         <Navbar handleLogout={handleLogout} />

         <Feed />

         <div className="flex justify-center mt-4">
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-6 py-3 rounded-lg flex items-center justify-center"
          >
            <FaSignOutAlt className="mr-2" /> Log Out
          </button>
        </div>

      </div>
      <div className="w-1/4 bg-gray-50 p-6">
        <UserProfile />  
      </div>

    </div>
  );
};

export default Dashboard;
