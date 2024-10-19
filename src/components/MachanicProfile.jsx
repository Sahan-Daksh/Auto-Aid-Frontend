import React from "react";

const MechanicProfile = () => {
  return (
    <div
      className="relative flex min-h-screen flex-col bg-slate-50 overflow-x-hidden"
      style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
    >
      <Header title="Mechanic Profile" />
      <ProfileInfo />
      <RatingSection />
      <VehicleInfo />
      <AvailabilityAndStatus />
      <EditProfileButton />
    </div>
  );
};

const Header = ({ title }) => (
  <div className="flex items-center bg-slate-50 p-4 pb-2 justify-between">
    <button className="text-[#0d141c]" data-icon="ArrowLeft" data-size="24px">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24px"
        height="24px"
        fill="currentColor"
        viewBox="0 0 256 256"
      >
        <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z" />
      </svg>
    </button>
    <h2 className="text-[#0d141c] text-lg font-bold flex-1 text-center pr-12">{title}</h2>
  </div>
);

const ProfileInfo = () => (
  <div className="flex flex-col items-center p-4">
    <img
      src="https://via.placeholder.com/80"
      alt="Profile"
      className="w-20 h-20 rounded-full object-cover"
    />
    <h2 className="text-xl font-semibold mt-2">Jacob</h2>
    <p className="text-sm text-gray-500">Joined in 2019</p>
    <p className="text-sm text-gray-500">Completed 323 jobs</p>
    <div className="flex gap-2 mt-4">
      <button className="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg">
        Send job
      </button>
      <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">
        View profile
      </button>
    </div>
  </div>
);

const RatingSection = () => (
  <div className="p-4">
    <p className="text-4xl font-bold text-center">4.8</p>
    <div className="flex justify-center items-center gap-1 mt-1">
      <p className="text-blue-500 text-xl">★★★★☆</p>
      <p className="text-gray-500 text-sm">(323 reviews)</p>
    </div>
    <div className="mt-4 space-y-2">
      {[
        { rating: 5, percentage: 72 },
        { rating: 4, percentage: 20 },
        { rating: 3, percentage: 5 },
        { rating: 2, percentage: 2 },
        { rating: 1, percentage: 1 },
      ].map((item) => (
        <div key={item.rating} className="flex items-center gap-2">
          <p className="text-sm text-gray-500">{item.rating}</p>
          <div className="flex-1 bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-500 h-2 rounded-full"
              style={{ width: `${item.percentage}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-500">{item.percentage}%</p>
        </div>
      ))}
    </div>
  </div>
);

const VehicleInfo = () => (
  <div className="p-4">
    <h2 className="text-[#0d141c] text-[22px] font-bold pb-3">Vehicle</h2>
    <div className="flex items-center gap-3">
      <img
        src="https://via.placeholder.com/60"
        alt="Vehicle"
        className="w-12 h-12 rounded-md object-cover"
      />
      <div>
        <p className="text-sm font-medium">Chevrolet Silverado</p>
        <p className="text-sm text-gray-500">License plate: 123567</p>
      </div>
    </div>
  </div>
);

const AvailabilityAndStatus = () => (
  <div className="p-4 flex justify-between">
    <div className="flex items-center gap-2">
      <span className="text-gray-500">🌐</span>
      <p className="text-sm text-gray-700">Online</p>
    </div>
    <div className="flex items-center gap-2">
      <input type="checkbox" checked className="form-checkbox text-blue-500" readOnly />
      <p className="text-sm text-gray-700">Active</p>
    </div>
  </div>
);

const EditProfileButton = () => (
  <div className="p-4">
    <button className="w-full bg-blue-500 text-white py-2 rounded-lg">
      Edit Profile
    </button>
  </div>
);

export default MechanicProfile;
