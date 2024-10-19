// ProfileScreen.js
import React from "react";

const ProfileScreen = () => {
  return (
    <div className="bg-white min-h-screen p-4">
      {/* Profile Section */}
      <h2 className="text-[#140e1b] text-xl font-bold leading-tight tracking-[-0.015em] flex-1 text-center mb-4 mt-4">
            Profile
          </h2>
      <div className="flex flex-col items-center mb-6">
        <img
          className="w-24 h-24 rounded-full object-cover"
          src="https://via.placeholder.com/150"
          alt="Profile"
        />
        <h2 className="text-lg font-semibold mt-4">Katherine</h2>
        <p className="text-gray-500">Joined 2019</p>
        <button className="mt-2 text-blue-500 hover:underline">Edit profile</button>
      </div>

      {/* Vehicles Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">Vehicles</h3>
        <div className="flex items-center bg-gray-100 p-4 rounded-lg shadow">
          <img
            src="https://via.placeholder.com/100"
            alt="Vehicle"
            className="w-20 h-16 rounded-md object-cover mr-4"
          />
          <div>
            <h4 className="text-base font-semibold">2008 Honda CR-V</h4>
            <p className="text-gray-500">Toyota</p>
            <p className="text-gray-500">License Plate: 7ZNE110</p>
          </div>
        </div>
        <button className="mt-4 text-blue-500 hover:underline">Add a new vehicle</button>
      </div>

      {/* Membership Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">Membership</h3>
        <button className="text-blue-500 hover:underline">
          Learn more about your benefits
        </button>
      </div>

      {/* Service History Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">Service history</h3>
        <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow">
          <div>
            <p className="text-base font-semibold">Last service</p>
            <p className="text-gray-500">May 4, 2023</p>
            <p className="text-gray-500">Oil change • 2,000 miles</p>
          </div>
          <button className="text-blue-500 hover:underline">Details</button>
        </div>
      </div>

      {/* My Mechanics Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">My mechanics</h3>
        <div className="flex items-center bg-gray-100 p-4 rounded-lg shadow">
          <img
            src="https://via.placeholder.com/150"
            alt="Mechanic"
            className="w-16 h-16 rounded-full object-cover mr-4"
          />
          <div>
            <p className="text-base font-semibold">Favorite Mechanic</p>
            <p className="text-gray-500">5 stars</p>
            <p className="text-gray-500">Jerry, San Francisco</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
