import React from 'react';

const PaymentCheckout = () => {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#faf8fc] justify-between group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      <div>
        {/* Header Section */}
        <div className="flex items-center bg-[#faf8fc] p-4 pb-2 justify-between">
          <div className="text-[#140e1b] flex size-12 shrink-0 items-center" data-icon="ArrowLeft" data-size="24px" data-weight="regular">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
            </svg>
          </div>
          <h2 className="text-[#140e1b] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">Payment Checkout</h2>
        </div>

        {/* Mechanic Summary */}
        <div className="flex items-center gap-4 bg-[#faf8fc] px-4 min-h-[72px] py-2">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-fit"
            style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/stability/9b300e16-15b8-4473-9d50-24f6fbd02eb4.png")' }}
          ></div>
          <div className="flex flex-col justify-center">
            <p className="text-[#140e1b] text-base font-medium leading-normal line-clamp-1">Mechanic Summary</p>
            <p className="text-[#734e97] text-sm font-normal leading-normal line-clamp-2">Willie P., 4.5 rating, 2 years experience</p>
          </div>
        </div>

        {/* Time Spent */}
        <div className="flex items-center gap-4 bg-[#faf8fc] px-4 min-h-14">
          <p className="text-[#140e1b] text-base font-normal leading-normal flex-1 truncate">Time Spent: 1 hour</p>
        </div>

        {/* Fare Breakdown */}
        <h3 className="text-[#140e1b] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Fare Breakdown</h3>
        <div className="p-4">
          <div className="flex justify-between gap-x-6 py-2">
            <p className="text-[#734e97] text-sm font-normal leading-normal">Base Fare</p>
            <p className="text-[#140e1b] text-sm font-normal leading-normal text-right">$80</p>
          </div>
          <div className="flex justify-between gap-x-6 py-2">
            <p className="text-[#734e97] text-sm font-normal leading-normal">Time-Based Charges</p>
            <p className="text-[#140e1b] text-sm font-normal leading-normal text-right">$40</p>
          </div>
          <div className="flex justify-between gap-x-6 py-2">
            <p className="text-[#734e97] text-sm font-normal leading-normal">Spare Parts Used</p>
            <p className="text-[#140e1b] text-sm font-normal leading-normal text-right">$300</p>
          </div>
          <div className="flex justify-between gap-x-6 py-2">
            <p className="text-[#734e97] text-sm font-normal leading-normal">Additional Fees</p>
            <p className="text-[#140e1b] text-sm font-normal leading-normal text-right">$20</p>
          </div>
          <div className="flex justify-between gap-x-6 py-2">
            <p className="text-[#734e97] text-sm font-normal leading-normal">Total</p>
            <p className="text-[#140e1b] text-sm font-normal leading-normal text-right">$440</p>
          </div>
        </div>

        {/* Special Remarks */}
        <h3 className="text-[#140e1b] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Special Remarks</h3>
        <p className="text-[#140e1b] text-base font-normal leading-normal pb-3 pt-1 px-4">The oil filter is replaced, the new one is installed.</p>

        {/* Payment Method */}
        <h3 className="text-[#140e1b] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Payment Method</h3>
        <div className="flex items-center gap-4 bg-[#faf8fc] px-4 min-h-14">
          <p className="text-[#140e1b] text-base font-normal leading-normal flex-1 truncate">Visa (****2319)</p>
        </div>
      </div>

      {/* Confirm and Pay Button */}
      <div>
        <div className="flex px-4 py-3">
          <button
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 flex-1 bg-[#8019e6] text-[#faf8fc] text-base font-bold leading-normal tracking-[0.015em]"
          >
            <span className="truncate">Confirm and Pay</span>
          </button>
        </div>
        <div className="h-5 bg-[#faf8fc]"></div>
      </div>
    </div>
  );
};

export default PaymentCheckout;