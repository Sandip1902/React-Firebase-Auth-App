import React from "react";
import bgImage from '../assets/bg.png'
import user1 from '../assets/user1.png'
import user2 from '../assets/user2.png'
import user3 from '../assets/user3.png'
import owner from '../assets/owner.png'

export const UserProfile = () => {
  return (
    <div className="text-center mb-8">
       <div
        className="relative rounded-lg overflow-hidden mb-4"
        style={{
          height: "200px",
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
         <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
          <img
            src={owner}
            alt="User"
            className="rounded-full border-4 border-white"
          />
        </div>
      </div>

       <h3 className="text-xl font-semibold">Sandip Sannake</h3>

       <div className="mt-6 bg-gray-100 p-4 rounded-lg border border-gray-300">
        <h4 className="text-lg font-semibold mb-4">Suggestions for you</h4>
        <ul>
          <li className="flex items-center mb-4 p-2 border-b border-gray-300 rounded-md hover:bg-gray-200">
            <img
              src={user3}
              alt="Suggested User 1"
              className="rounded-full w-10 h-10 mr-3"
            />
            <span className="font-medium">Lohn Doe</span>
          </li>
          <li className="flex items-center mb-4 p-2 border-b border-gray-300 rounded-md hover:bg-gray-200">
            <img
              src={user1}
              alt="Suggested User 2"
              className="rounded-full w-10 h-10 mr-3"
            />
            <span className="font-medium">Suggested User 2</span>
          </li>
          <li className="flex items-center mb-4 p-2 border-b border-gray-300 rounded-md hover:bg-gray-200">
            <img
              src={user2}
              alt="Suggested User 3"
              className="rounded-full w-10 h-10 mr-3"
            />
            <span className="font-medium">Suggested User 3</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
