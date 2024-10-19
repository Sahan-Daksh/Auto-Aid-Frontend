// App.js
import React from "react";

const ActiveJob = () => {
  return (
    <div
      className="relative flex min-h-screen flex-col bg-slate-50 justify-between overflow-x-hidden"
      style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
    >
      {/* Header and Job Info */}
      <div>
        <Header />
        <JobInfo />
        <TripProgress progress={50} />
        <MapImage 
          imageUrl="https://cdn.usegalileo.ai/maps/c37a9aeb-f11b-4f73-a0a9-5a04a7fd71cf.png" 
        />
      </div>

      {/* Footer Buttons */}
      <div>
        <FooterButtons />
        <div className="h-5 bg-slate-50"></div>
      </div>
    </div>
  );
};

// Header Component
const Header = () => (
  <div className="flex items-center bg-slate-50 p-4 pb-2 justify-between">
    <div className="text-[#0d141c] flex items-center" data-icon="ArrowLeft" data-size="24px">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24px"
        height="24px"
        fill="currentColor"
        viewBox="0 0 256 256"
      >
        <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
      </svg>
    </div>
    <h2 className="text-[#0d141c] text-lg font-bold text-center pr-12 flex-1">
      Active Job
    </h2>
  </div>
);

// Job Info Component
const JobInfo = () => (
  <div className="flex items-center gap-4 bg-slate-50 px-4 min-h-[72px] py-2">
    <div
      className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14"
      style={{
        backgroundImage:
          'url("https://cdn.usegalileo.ai/stability/9e222c1a-ed81-4b4e-acb2-20eba653637c.png")',
      }}
    ></div>
    <div className="flex flex-col justify-center">
      <p className="text-[#0d141c] text-base font-medium">Mia S.</p>
      <p className="text-[#49719c] text-sm">
        2018 Toyota Camry. Engine issue
      </p>
    </div>
  </div>
);

// Trip Progress Component
const TripProgress = ({ progress }) => (
  <div className="flex flex-col gap-3 p-4">
    <div className="flex gap-6 justify-end">
      <p className="text-[#0d141c] text-sm">{progress}%</p>
    </div>
    <div className="rounded bg-[#cedbe8]">
      <div
        className="h-2 rounded bg-[#0d7cf2]"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  </div>
);

// Map Image Component
const MapImage = ({ imageUrl }) => (
  <div className="flex px-4 py-3">
    <div
      className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
      style={{ backgroundImage: `url("${imageUrl}")` }}
    ></div>
  </div>
);

// Footer Buttons Component
const FooterButtons = () => (
  <div className="flex justify-center">
    <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 max-w-[480px] justify-center">
      <Button label="Call Customer" bgColor="#e7edf4" textColor="#0d141c" />
      <Button label="Report Issues" bgColor="#0d7cf2" textColor="white" />
      <Button label="Mark Job as Completed" bgColor="transparent" textColor="#0d141c" />
    </div>
  </div>
);

// Reusable Button Component
const Button = ({ label, bgColor, textColor }) => (
  <button
    className={`flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 font-bold leading-normal tracking-[0.015em] grow`}
    style={{ backgroundColor: bgColor, color: textColor }}
  >
    <span className="truncate">{label}</span>
  </button>
);

export default ActiveJob;
