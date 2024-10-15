import React from 'react';

const ServiceDetail = () => {
  return (
    <div className="relative flex flex-col min-h-screen bg-white font-sans">
      <header className="flex items-center p-4 justify-between">
        <div className="text-[#111418] cursor-pointer">
          {/* Back Button SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
            <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z" />
          </svg>
        </div>
      </header>

      <div className="bg-cover bg-center min-h-[218px] rounded-xl" style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/46ff1f93-5d67-4572-aa96-e2f35fcb1975.png")' }} />

      <h1 className="text-[#111418] text-2xl font-bold text-center py-5">Sunnyvale Smog Check</h1>

      <div className="flex flex-wrap gap-8 p-4">
        <div className="flex flex-col gap-2">
          <p className="text-4xl font-black">4.5</p>
          <div className="flex">
            {/* Star Icons */}
            {[...Array(4)].map((_, index) => (
              <svg key={index} xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z" />
              </svg>
            ))}
            {/* Half Star */}
            <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M239.2,97.29a16,16,0,0,0-13.81-11L166,81.17,142.72,25.81h0a15.95,15.95,0,0,0-29.44,0L90.07,81.17,30.61,86.32a16,16,0,0,0-9.11,28.06L66.61,153.8,53.09,212.34a16,16,0,0,0,23.84,17.34l51-31,51.11,31a16,16,0,0,0,23.84-17.34l-13.51-58.6,45.1-39.36A16,16,0,0,0,239.2,97.29Zm-15.22,5-45.1,39.36a16,16,0,0,0-5.08,15.71L187.35,216v0l-51.07-31a15.9,15.9,0,0,0-16.54,0l-51,31h0L82.2,157.4a16,16,0,0,0-5.08-15.71L32,102.35a.37.37,0,0,1,0-.09l59.44-5.14a16,16,0,0,0,13.35-9.75L128,32.08l23.2,55.29a16,16,0,0,0,13.35,9.75L224,102.26S224,102.32,224,102.33Z" />
            </svg>
          </div>
          <p className="text-base">120 reviews</p>
        </div>
        {/* Rating Distribution */}
        <div className="grid min-w-[200px] max-w-[400px] flex-1 grid-cols-[20px_1fr_40px] items-center gap-y-3">
          {[5, 4, 3, 2, 1].map((rating) => (
            <React.Fragment key={rating}>
              <p className="text-sm">{rating}</p>
              <div className="flex h-2 flex-1 overflow-hidden rounded-full bg-[#dce0e5]">
                <div className="rounded-full bg-[#111418]" style={{ width: `${rating * 10}%` }}></div>
              </div>
              <p className="text-sm text-right">{rating * 10}%</p>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <button className="bg-[#338de6] text-white rounded-full h-10 px-4 font-bold">Book Appointment</button>
        <button className="bg-[#f0f2f4] text-[#111418] rounded-full h-10 px-4 font-bold">Inquiries</button>
      </div>

      <h3 className="text-lg font-bold px-4 pt-4">Station Bio</h3>
      <p className="px-4 pb-3">We are the top rated smog station in Sunnyvale. We have been serving the community for over 10 years.</p>

      {/* Location and Contact Info */}
      {['Location', 'Contact'].map((info) => (
        <div className="flex gap-4 bg-white px-4 py-3" key={info}>
          <div className="text-[#111418] flex items-center justify-center rounded-lg bg-[#f0f2f4] shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z" />
            </svg>
          </div>
          <div className="flex flex-1 flex-col justify-center">
            <p className="text-base font-medium">{info}</p>
            <p className="text-sm">Open</p>
            <p className="text-sm">Smog Check Stations</p>
          </div>
        </div>
      ))}

      <div className="flex justify-end px-4 py-3">
        <button className="bg-[#f0f2f4] text-[#111418] rounded-full h-10 px-4 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
            <path d="M178,32c-20.88,0-39.56,8.33-53.94,22.84L32,92.17c-4.84,4.84-4.84,12.57,0,17.42,4.83,4.84,12.57,4.84,17.41,0L178,64c18.63,0,36,7.78,48.14,21.62S256,128,256,144c0,14.82-4.73,29.73-13.6,42.78-3.62,5.33-1.79,12.59,3.53,16.23a12.053,12.053,0,0,0,5.39,1.31c4.36,0,8.49-2.07,11-5.91C256.7,183.93,256,167.13,256,144c0-34.68-16.12-68.75-44.09-90.36C217.15,40.73,197.5,32,178,32ZM32,132.17c-4.84-4.84-12.57-4.84-17.41,0-4.84,4.84-4.84,12.57,0,17.41L146,210c4.84,4.84,12.57,4.84,17.41,0s4.84-12.57,0-17.41Z" />
          </svg>
          Share
        </button>
      </div>
    </div>
  );
};

export default ServiceDetail;
