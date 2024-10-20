import React from "react";
import './BookingAppointment.css'
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";

const BookingAppointment = () => {
  return (
    <div
      className="relative flex min-h-screen flex-col bg-[#f8fafb] px-6 py-4 overflow-hidden"
      style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
    >
      <Header className='text-center' title="Book Appointment" />
      <p className="text-[#0e161b] text-base font-normal leading-normal pb-3 pt-1 text-center">
        Welcome to Support
      </p>
      <div className="flex justify-center gap-3 py-4">
        <ActionButton label="Call Us" />
        <ActionButton label="Chat with Us" />
        <ActionButton label="Email Us" />
      </div>
      <form className="space-y-4">
        <InputField placeholder="Name" />
        <InputField placeholder="Email" />
        <InputField placeholder="Phone Number" />
        <TextAreaField placeholder="Description" />
      </form>
      <TimeDate />
      {/* <SelectTime /> */}
      <ConfirmButton />
    </div>
  );
};

const Header = ({ title }) => (
  <div className="flex items-center justify-between pb-4">
    <button className="text-[#0e161b]">
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
    <h2 className="text-lg font-bold text-[#0e161b]">{title}</h2>
  </div>
);

const ActionButton = ({ label }) => (
  <button className="flex items-center justify-center gap-x-2 bg-[#e8eef3] rounded-xl py-2 px-4">
    <p className="text-[#0e161b] text-sm font-medium">{label}</p>
  </button>
);

const InputField = ({ placeholder }) => (
  <input
    placeholder={placeholder}
    className="form-input w-full resize-none rounded-xl text-[#0e161b] border border-[#d1dde6] bg-[#f8fafb] h-14 placeholder:text-[#507a95] p-[15px] text-base"
  />
);

const TextAreaField = ({ placeholder }) => (
  <textarea
    placeholder={placeholder}
    className="form-input w-full resize-none rounded-xl text-[#0e161b] border border-[#d1dde6] bg-[#f8fafb] h-36 placeholder:text-[#507a95] p-[15px] text-base"
  />
);

// const dateValue : Date = new Date("20/10/2024 10:30 AM") 

const TimeDate = () => (
    <div>
        <DateTimePickerComponent placeholder="Choose a Date and time"
        min={new Date(2024, 10, 20, 8, 0)}  // Min: Oct 20, 2024, 8:00 AM
        max={new Date(2028, 10, 25, 8, 0)} // Max: Oct 25, 2024, 6:00 PM
        > 
        </DateTimePickerComponent>
    </div>
)

const SelectTime = () => (
  <div className="flex items-center justify-between bg-[#f8fafb] py-3">
    <p className="text-[#0e161b] text-base">Select a time</p>
    <button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24px"
        height="24px"
        fill="currentColor"
        viewBox="0 0 256 256"
      >
        <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
      </svg>
    </button>
  </div>
);

const ConfirmButton = () => (
  <div className="mt-8">
    <button className="w-full bg-[#2c99e2] text-white py-3 rounded-lg font-bold">
      Confirm Appointment
    </button>
  </div>
);

export default BookingAppointment;
