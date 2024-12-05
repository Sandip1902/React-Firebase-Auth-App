import React from 'react';
import image1 from '../assets/image1.png'
import profile from '../assets/profile.png'
const Post = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <div className="flex items-center mb-4">
        <img
          src={profile}
          alt="user"
          className="rounded-full w-12 h-12 mr-4"
        />
        <div>
          <h2 className="font-semibold">Lara Leones</h2>
          <p>@thewallart</p>
        </div>
      </div>

      <p>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        <span className="text-blue-500 cursor-pointer"> Read More</span>
      </p>

      <div className="mt-4">
        <img
          src={image1}
          alt="content"
          className="rounded-lg w-full"
        />
      </div>

      <div className="flex justify-between mt-4">
        <div>
          <span className="mr-4">9.8k</span>
          <span className="mr-4">8.6k</span>
          <span className="mr-4">7.2k</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
