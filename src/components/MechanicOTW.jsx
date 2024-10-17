import React from "react";

const MechanicOTW = () => {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#faf8fc] group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      <div className="flex items-center bg-[#faf8fc] p-4 pb-2 justify-between">
        <div
          className="text-[#140e1b] flex size-12 shrink-0 items-center"
          data-icon="ArrowLeft"
          data-size="24px"
          data-weight="regular"
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
        </div>
        <div className="flex w-12 items-center justify-end">
          <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 bg-transparent text-[#140e1b] gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0">
            <div
              className="text-[#140e1b]"
              data-icon="UserCircle"
              data-size="24px"
              data-weight="regular"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path
                  d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM74.08,197.5a64,64,0,0,1,107.84,0,87.83,87.83,0,0,1-107.84,0ZM96,120a32,32,0,1,1,32,32A32,32,0,0,1,96,120Zm97.76,66.41a79.66,79.66,0,0,0-36.06-28.75,48,48,0,1,0-59.4,0,79.66,79.66,0,0,0-36.06,28.75,88,88,0,1,1,131.52,0Z"
                ></path>
              </svg>
            </div>
          </button>
        </div>
      </div>

      <div className="@container">
        <div className="@[480px]:px-4 @[480px]:py-3">
          <div
            className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden bg-[#faf8fc] @[480px]:rounded-xl min-h-[218px]"
            style={{
              backgroundImage:
                'url("https://cdn.usegalileo.ai/stability/15c1c3c3-83aa-4146-afeb-9b3b5b7935f9.png")',
            }}
          ></div>
        </div>
      </div>

      <h1 className="text-[#140e1b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 text-center pb-3 pt-5">
        Mechanic on the Way
      </h1>
      <p className="text-[#140e1b] text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
        Your mechanic, James, is 8 minutes away. He's rated 4.9 out of 5.
      </p>

      <div className="flex items-center gap-4 bg-[#faf8fc] px-4 min-h-[72px] py-2">
        <div className="flex flex-col justify-center">
          <p className="text-[#140e1b] text-base font-medium leading-normal line-clamp-1">
            Arrival Time
          </p>
          <p className="text-[#734e97] text-sm font-normal leading-normal line-clamp-2">
            12:30 PM
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 max-w-[480px] justify-center">
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#8019e6] text-[#faf8fc] text-sm font-bold leading-normal tracking-[0.015em] grow">
            <span className="truncate">Cancel Request</span>
          </button>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#ede7f3] text-[#140e1b] text-sm font-bold leading-normal tracking-[0.015em] grow">
            <span className="truncate">Call Mechanic</span>
          </button>
        </div>
      </div>

      <div className="flex px-4 py-3">
        <div
          className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl object-cover"
          style={{
            backgroundImage:
              'url("https://cdn.usegalileo.ai/maps/377feeb5-5266-4cad-9f66-a4c06af6a461.png")',
          }}
        ></div>
      </div>

      <div className="p-4">
        <div
          className="bg-cover bg-center flex flex-col items-stretch justify-end rounded-xl pt-[132px]"
          style={{
            backgroundImage:
              'linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%), url("https://cdn.usegalileo.ai/replicate/518682ef-a7f4-47e8-a3e7-18288ed4dacb.png")',
          }}
        >
          <div className="flex w-full items-end justify-between gap-4 p-4">
            <div className="flex max-w-[440px] flex-1 flex-col gap-1">
              <p className="text-white tracking-light text-2xl font-bold leading-tight max-w-[440px]">
                Vehicle Details
              </p>
              <p className="text-white text-base font-medium leading-normal">
                Toyota Prius 2021
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-5 bg-[#faf8fc]"></div>
    </div>
  );
};

export default MechanicOTW;
