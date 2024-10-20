import React from 'react';

const Profilethree = () => {
  return (
    <div
      className="relative flex flex-col min-h-screen bg-[#faf8fc] justify-between overflow-x-hidden"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      {/* Header */}
      <div className="flex items-center p-4 justify-between bg-[#faf8fc]">
        {/* Back Button */}
        <button
          className="flex items-center text-[#140e1b]"
          aria-label="Back"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
          </svg>
        </button>

        {/* Title */}
        <h2 className="text-lg font-bold text-center flex-1 text-[#140e1b]">
          Profile
        </h2>

        {/* Settings Button */}
        <button className="flex items-center justify-center text-[#140e1b]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06A107.21,107.21,0,0,0,206.2,94l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40q-2.16.06-4.32,0L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84q-.06,2.16,0,4.32L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16-.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06ZM128,160a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"></path>
          </svg>
        </button>
      </div>

      {/* Profile Section */}
      <div className="p-6 bg-white min-h-[calc(100vh_-_100px)]">
        <div className="relative mb-6">
          {/* Background Image */}
          <div className="absolute top-0 left-0 w-24 h-24 bg-[#ff004f] rounded-full -translate-y-1/2"></div>
          <img
            className="w-full h-40 object-cover rounded-2xl"
            src="https://via.placeholder.com/400x200"
            alt="Profile Background"
          />
        </div>

        {/* Profile Picture */}
        <div className="w-28 h-28 border-4 border-white rounded-full overflow-hidden -mt-12 mx-auto">
          <img
            className="w-full h-full object-cover"
            src="https://via.placeholder.com/150"
            alt="Profile Avatar"
          />
        </div>

        {/* User Info */}
        <div className="text-center mt-4">
          <h3 className="text-lg font-bold text-[#140e1b]">John Doe</h3>
          <p className="text-sm text-gray-500">Software Engineer</p>
        </div>
      </div>
    </div>
  );
};

export default Profilethree;
