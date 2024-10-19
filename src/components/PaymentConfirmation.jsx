import React from "react";

const PaymentConfirmation = () => {
  return (
    <div
      className="relative flex min-h-screen flex-col bg-slate-50 px-6 py-4 overflow-hidden"
      style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
    >
      <Header title="Payment Confirmation" />
      <div className="mt-6">
        <TotalAmountSection />
        <DetailsSection />
      </div>
      <ConfirmButton />
      <RequestAdditionalPayment />
    </div>
  );
};

const Header = ({ title }) => (
  <div className="flex items-center justify-between">
    <button className="text-gray-700">
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
    <h2 className="text-lg font-bold text-gray-900">{title}</h2>
  </div>
);

const TotalAmountSection = () => (
  <div className="mt-8">
    <p className="text-gray-500 text-sm">Total Amount</p>
    <h1 className="text-3xl font-bold text-gray-900">$1,150.00</h1>
  </div>
);

const DetailsSection = () => (
  <div className="mt-6 space-y-4">
    <DetailItem
      label="Labor (3 hours)"
      amount="$600"
      onAdjust={() => console.log("Adjust Labor")}
    />
    <DetailItem
      label="Spare parts"
      amount="$550"
      onAdjust={() => console.log("Adjust Spare Parts")}
    />
  </div>
);

const DetailItem = ({ label, amount, onAdjust }) => (
  <div className="flex items-center justify-between">
    <div>
      <p className="text-gray-900 font-medium">{label}</p>
      <p className="text-blue-500 text-sm">{amount}</p>
    </div>
    <button
      className="bg-gray-100 text-gray-700 py-1 px-4 rounded-md"
      onClick={onAdjust}
    >
      Adjust
    </button>
  </div>
);

const ConfirmButton = () => (
  <div className="mt-8">
    <button className="w-full bg-blue-500 text-white py-3 rounded-lg font-bold">
      Confirm Payment
    </button>
  </div>
);

const RequestAdditionalPayment = () => (
  <div className="flex items-center justify-between mt-4 text-gray-900">
    <p className="text-sm">Request Additional Payment</p>
    <button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24px"
        height="24px"
        fill="currentColor"
        viewBox="0 0 256 256"
      >
        <path d="M160,128a8,8,0,0,1-8,8H67.31l58.35,58.34a8,8,0,1,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,1,1,11.32,11.32L67.31,120H152A8,8,0,0,1,160,128Z" />
      </svg>
    </button>
  </div>
);

export default PaymentConfirmation;
