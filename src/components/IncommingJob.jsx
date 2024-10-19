// App.js
import React from "react";

const IncomingJob = () => {
  return (
    <div
      className="relative flex min-h-screen flex-col bg-slate-50 overflow-x-hidden"
      style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
    >
      {/* Header */}
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
          Incoming job request
        </h2>
      </div>

      {/* Car Information */}
      <h2 className="text-[#0d141c] text-[22px] font-bold px-4 pb-3 pt-5">
        John's car
      </h2>
      <div className="flex items-center gap-4 bg-slate-50 px-4 min-h-[72px] py-2">
        <div className="flex flex-col">
          <p className="text-[#0d141c] text-base font-medium">
            2016 BMW 3 series
          </p>
          <p className="text-[#49719c] text-sm">
            CA plate: 7JFN123
          </p>
        </div>
      </div>

      {/* Issue */}
      <h2 className="text-[#0d141c] text-[22px] font-bold px-4 pb-3 pt-5">
        Issue
      </h2>
      <p className="text-[#0d141c] text-base px-4">
        Engine failure, power failure
      </p>

      {/* Location */}
      <h2 className="text-[#0d141c] text-[22px] font-bold px-4 pb-3 pt-5">
        Location
      </h2>
      <LocationInfo title="Pickup" distance="2.5 miles away" location="San Mateo, CA" />
      <LocationInfo title="Destination" distance="30 mins away" location="San Francisco, CA" />

      {/* Map */}
      <div className="flex px-4 py-3">
        <div
          className="w-full bg-center bg-no-repeat aspect-video rounded-xl"
          style={{
            backgroundImage: 'url("https://cdn.usegalileo.ai/maps/43173981-a0b1-41eb-9e59-3eed40167f72.png")',
          }}
        ></div>
      </div>

      {/* Timer */}
      <div className="flex gap-4 py-6 px-4">
        <TimerUnit value="00" label="Hours" />
        <TimerUnit value="10" label="Minutes" />
        <TimerUnit value="00" label="Seconds" />
      </div>

      {/* Accept Button */}
      <div className="flex px-4 py-3">
        <button className="flex flex-1 items-center justify-center h-12 rounded-xl bg-[#0d7cf2] text-slate-50 font-bold">
          Accept job
        </button>
      </div>
      <div className="h-5 bg-slate-50"></div>
    </div>
  );
};

// LocationInfo Component
const LocationInfo = ({ title, distance, location }) => (
  <div className="flex gap-4 bg-slate-50 px-4 py-3">
    <div className="flex-1 flex-col">
      <p className="text-[#0d141c] text-base font-medium">{title}</p>
      <p className="text-[#49719c] text-sm">{distance}</p>
      <p className="text-[#49719c] text-sm">{location}</p>
    </div>
  </div>
);

// TimerUnit Component
const TimerUnit = ({ value, label }) => (
  <div className="flex grow basis-0 flex-col items-stretch gap-4">
    <div className="flex h-14 items-center justify-center rounded-xl bg-[#e7edf4]">
      <p className="text-[#0d141c] text-lg font-bold">{value}</p>
    </div>
    <div className="flex items-center justify-center">
      <p className="text-[#0d141c] text-sm">{label}</p>
    </div>
  </div>
);

export default IncomingJob;
