import React from 'react';
import {SocialIcon} from 'react-social-icons';


const Footer = () => {
  return (
    <footer className="py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="flex space-x-4 md:mt-0">
            <SocialIcon className='hover:scale-105 transition-transform' url="https://youtube.com" style={{ height: 35, width: 35 }} />
            <SocialIcon className='hover:scale-105 transition-transform' url="https://linkedin.com" style={{ height: 35, width: 35 }} />
          </div>
        </div>
        <div className="mt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Wicked XR Banners. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;