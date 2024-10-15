import React from 'react';

const NearbyServiceStations = () => {
  return (
    <div className="relative flex min-h-screen flex-col bg-white overflow-x-hidden" style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}>
      <header className="flex items-center bg-white p-4 pb-2 justify-between">
        <h2 className="text-[#111418] text-lg font-bold leading-tight flex-1 text-center pl-12">Nearby Service Stations</h2>
        <button className="flex items-center justify-center h-12 bg-transparent text-[#111418] gap-2 text-base font-bold">
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
            <path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"></path>
          </svg>
        </button>
      </header>
      <main className="flex flex-col flex-1">
        <section className="flex flex-1 flex-col px-4 py-3">
          <div className="bg-cover bg-center flex min-h-[320px] flex-1 flex-col justify-between px-4 pb-4 pt-5" style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/maps/37111f7f-2c6c-456c-bb78-6969fa891d62.png")' }}>
            <div className="flex flex-col min-w-40 h-12">
              <div className="flex flex-1 items-stretch rounded-xl h-full">
                <div className="text-[#637588] flex items-center justify-center pl-4 rounded-l-xl bg-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                  </svg>
                </div>
                <input className="form-input flex w-full min-w-0 flex-1 h-full placeholder:text-[#637588] px-4 rounded-xl bg-white" placeholder="Search..." />
              </div>
            </div>
            <div className="flex flex-col items-end gap-3">
              <div className="flex flex-col gap-0.5">
                <button className="flex items-center justify-center rounded-t-full bg-white shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>
                  </svg>
                </button>
                <button className="flex items-center justify-center rounded-b-full bg-white shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z"></path>
                  </svg>
                </button>
              </div>
              <button className="flex items-center justify-center rounded-full bg-white shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256" transform="scale(-1, 1)">
                  <path d="M229.33,98.21,53.41,33l-.16-.05A16,16,0,0,0,32.9,53.25a1,1,0,0,0,.05.16L98.21,229.33A15.77,15.77,0,0,0,113.28,240h.3a15.77,15.77,0,0,0,15-11.29l23.56-76.56,76.56-23.56a16,16,0,0,0,.62-30.38ZM224,113.3l-76.56,23.56a16,16,0,0,0-10.58,10.58L113.3,224h0l-.06-.17L48,48l175.82,65.22.16.06Z"></path>
                </svg>
              </button>
            </div>
          </div>
        </section>
        <h2 className="text-[#111418] text-[22px] font-bold px-4 pt-5 pb-3">Stations near you</h2>
        {/* Repeat Station Card */}
        {[
          {
            name: 'Shell - 4th St & Townsend St',
            distance: '0.3mi',
            imageUrl: 'https://cdn.usegalileo.ai/sdxl10/6cdcef34-cc27-44cd-9888-93360390be53.png'
          },
          {
            name: 'Chevron - 9th St & Brannan St',
            distance: '0.7mi',
            imageUrl: 'https://cdn.usegalileo.ai/sdxl10/c532256c-0bfe-4905-8642-6bc3c4e5eaf4.png'
          }
        ].map((station, index) => (
          <div className="p-4" key={index}>
            <div className="flex items-stretch justify-between gap-4 rounded-xl">
              <div className="flex flex-col gap-1 flex-[2_2_0px]">
                <p className="text-[#111418] text-base font-bold leading-tight">{station.name}</p>
                <p className="text-[#637588] text-sm font-normal">{station.distance}</p>
              </div>
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                style={{ backgroundImage: `url(${station.imageUrl})` }}
              ></div>
            </div>
            <div className="flex justify-center">
              <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 max-w-[480px] justify-center">
                <button className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-full h-10 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-bold">View</button>
                <button className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-full h-10 px-4 bg-[#338de6] text-white text-sm font-bold">Pre-order</button>
              </div>
            </div>
          </div>
        ))}
        <div className="h-5 bg-white"></div>
      </main>
    </div>
  );
};

export default NearbyServiceStations;
