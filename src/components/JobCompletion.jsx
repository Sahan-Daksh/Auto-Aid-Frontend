// App.js
import React, { useState } from "react";

const JobCompletion = () => {
  return (
    <div
      className="relative flex min-h-screen flex-col bg-slate-50 overflow-x-hidden"
      style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
    >
      <Header title="Job Completion" />
      <Section title="Work Done" content="Replaced brake pads, rotor and sensor on front driver side." />
      <Section title="Spare Parts Used">
        <SparePart name="Brake Pad" price="$109.99" />
        <SparePart name="Rotor" price="$89.99" />
        <SparePart name="Sensor" price="$19.99" />
      </Section>
      <Section title="Hours Worked" content="3 hours and 30 minutes" />
      <Section title="Job Summary">
        <SummaryItem label="Total Cost" value="$2,240.00" />
      </Section>
      <JobNotification />
      <SubmitButton />
    </div>
  );
};

const Header = ({ title }) => (
  <div className="flex items-center bg-slate-50 p-4 pb-2 justify-between">
    <div className="text-[#0d141c] flex items-center" data-icon="ArrowLeft" data-size="24px">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24px"
        height="24px"
        fill="currentColor"
        viewBox="0 0 256 256"
      >
        <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z" />
      </svg>
    </div>
    <h2 className="text-[#0d141c] text-lg font-bold flex-1 text-center pr-12">{title}</h2>
  </div>
);

const Section = ({ title, content, children }) => (
  <div>
    <h2 className="text-[#0d141c] text-[22px] font-bold px-4 pb-3 pt-5">{title}</h2>
    {content && <p className="text-[#0d141c] text-base px-4 pb-3">{content}</p>}
    {children}
  </div>
);

const SparePart = ({ name, price }) => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(Math.max(1, quantity - 1));

  return (
    <div className="flex items-center gap-4 bg-slate-50 px-4 py-2 justify-between">
      <div className="flex flex-col">
        <p className="text-[#0d141c] text-base font-medium">{name}</p>
        <p className="text-[#49719c] text-sm">{price}</p>
      </div>
      <div className="flex items-center gap-2">
        <button className="h-7 w-7 rounded-full bg-[#e7edf4]" onClick={decrement}>
          -
        </button>
        <input
          type="number"
          value={quantity}
          className="w-4 text-center bg-transparent focus:outline-none"
          readOnly
        />
        <button className="h-7 w-7 rounded-full bg-[#e7edf4]" onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
};

const SummaryItem = ({ label, value }) => (
  <div className="flex items-center gap-4 bg-slate-50 px-4 py-2">
    <div className="flex flex-col">
      <p className="text-[#0d141c] text-base font-medium">{label}</p>
      <p className="text-[#49719c] text-sm">{value}</p>
    </div>
  </div>
);

const JobNotification = () => (
  <div className="flex gap-4 bg-slate-50 px-4 py-3">
    <div className="flex flex-1 flex-col">
      <p className="text-[#0d141c] text-base font-medium">Job Completion Notification</p>
      <p className="text-[#49719c] text-sm">The customer has been notified that the car is ready for pickup.</p>
      <p className="text-[#49719c] text-sm">The customer has been notified of the job completion status.</p>
    </div>
  </div>
);

const SubmitButton = () => (
  <div className="flex px-4 py-3">
    <button className="flex-1 h-12 bg-[#0d7cf2] text-slate-50 font-bold rounded-xl">
      Submit Job
    </button>
  </div>
);

export default JobCompletion;
