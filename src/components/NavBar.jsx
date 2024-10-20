import React from 'react';
import { Link } from 'react-router-dom';
import HomeScreen from './HomeScreen';

const NavBar = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white justify-between group/design-root overflow-x-hidden" style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}>
      <HomeScreen/>
      <footer>
        <div className="flex gap-2 border-t border-[#f0f2f4] bg-white px-4 pb-3 pt-2">
          {[
            { icon: 'House', text: 'Home', color: '#111418', linkdir: '/HomeScreen' },
            { icon: 'Wrench', text: 'Services', color: '#637588', linkdir: '/NearbyServiceStations' },
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

export default NavBar;