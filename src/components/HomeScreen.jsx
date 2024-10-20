import React from 'react';
import { Link } from 'react-router-dom';

const HomeScreen = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white justify-between group/design-root overflow-x-hidden" style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}>
      <div>
        <header className="flex items-center bg-white p-4 pb-2 justify-between">
          <div className="flex size-12 shrink-0 items-center">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8"
              style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/stability/915ed658-2cbf-465b-81fc-8226b03cbf72.png")' }}
            />
          </div>
          <div className="flex w-12 items-center justify-end">
            <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 bg-transparent text-[#111418] gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0">
              <div className="text-[#111418]" data-icon="Bell" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z" />
                </svg>
              </div>
            </button>
          </div>
        </header>

        <h2 className="text-[#111418] tracking-light text-[28px] font-bold leading-tight px-4 text-left pb-3 pt-5">Welcome, Alex</h2>
        <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Featured Services</h3>

        <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex items-stretch p-4 gap-3">
            {[
              {
                imgUrl: "https://cdn.usegalileo.ai/stability/730098b2-8c2c-4ed8-9617-74c99feb80b1.png",
                title: "Mechanic Support",
              },
              {
                imgUrl: "https://cdn.usegalileo.ai/sdxl10/48159560-4911-42e0-88dc-725b0bd86c6e.png",
                title: "Parking Finder",
              },
              {
                imgUrl: "https://cdn.usegalileo.ai/stability/0eb7a1a9-debd-4d2a-aba8-db7fd8a90dff.png",
                title: "Nearby Service Stations",
              },
            ].map((service, index) => (
              <div key={index} className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
                  style={{ backgroundImage: `url(${service.imgUrl})` }}
                />
                <p className="text-[#111418] text-base font-medium leading-normal">{service.title}</p>
              </div>
            ))}
          </div>
        </div>

        <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Other Services</h3>
        
        {[
          {
            title: "Breakdown Services",
            description: "We'll help you get back on the road.",
            imgUrl: "https://cdn.usegalileo.ai/stability/50567b5b-ec69-467e-b046-530bdc86a9cc.png",
          },
          {
            title: "Emergency Services",
            description: "Get help in a few taps.",
            imgUrl: "https://cdn.usegalileo.ai/stability/7cc5d47e-ae81-4aba-8688-abe914ba4433.png",
          },
          {
            title: "Filling & Charging Stations",
            description: "Find gas and electric stations nearby.",
            imgUrl: "https://cdn.usegalileo.ai/stability/809fac33-3968-4c7b-a6a8-28f8d2e521f0.png",
          },
        ].map((service, index) => (
          <div key={index} className="p-4">
            <div className="flex items-stretch justify-between gap-4 rounded-xl bg-white p-4 shadow-[0_0_4px_rgba(0,0,0,0.1)]">
              <div className="flex flex-[2_2_0px] flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <p className="text-[#111418] text-base font-bold leading-tight">{service.title}</p>
                  <p className="text-[#637588] text-sm font-normal leading-normal">{service.description}</p>
                </div>
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 flex-row-reverse bg-[#f0f2f4] text-[#111418] text-sm font-medium leading-normal w-fit">
                  <span className="truncate">Learn More</span>
                </button>
              </div>
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                style={{ backgroundImage: `url(${service.imgUrl})` }}
              />
            </div>
          </div>
        ))}
      </div>
      <footer>
        <div className="flex gap-2 border-t border-[#f0f2f4] bg-white px-4 pb-3 pt-2">
          {[
            { icon: 'House', text: 'Home', color: '#111418', linkdir: '/HomeScreen' },
            { icon: 'Wrench', text: 'Services', color: '#637588', linkdir: '#' },
            { icon: 'CreditCard', text: 'Wallet', color: '#637588', linkdir: '#' },
            { icon: 'UserCircle', text: 'Profile', color: '#637588', linkdir: '#' },
          ].map((link, index) => (
            <Link 
              key={index} 
              className={`flex flex-1 flex-col items-center justify-end gap-1 rounded-full text-${link.color}`} 
              to={link.linkdir} // Use the 'to' attribute for routing
            >
              <div className={`flex h-8 items-center justify-center text-${link.color}`} data-icon={link.icon} data-size="24px" data-weight="regular">
                {/* Replace with actual SVG paths or components */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  {/* Add your icon path here */}
                </svg>
              </div>
              <p className={`text-xs font-medium leading-normal tracking-[0.015em] text-${link.color}`}>{link.text}</p>
            </Link>
          ))}
        </div>
        <div className="h-5 bg-white" />
      </footer>  
    </div>
  );
};

export default HomeScreen;
