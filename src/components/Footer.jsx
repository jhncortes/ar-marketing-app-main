import React from 'react';
import { Button } from '@/components/ui/button'; // Adjust based on your component structure
import { SocialIcon } from 'react-social-icons'; // You may need to install this package

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold">Wicked XR Banners</h2>
            <p className="mt-2">Transforming customer engagement with AI-powered virtual concierges.</p>
          </div>
          <div className="mt-4 md:mt-0">
            <nav className="flex space-x-4">
              <Button variant="link" href="/">Home</Button>
              <Button variant="link" href="/about">About Us</Button>
              <Button variant="link" href="/services">Services</Button>
              <Button variant="link" href="/contact">Contact</Button>
            </nav>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <SocialIcon url="https://facebook.com" style={{ height: 35, width: 35 }} />
            <SocialIcon url="https://twitter.com" style={{ height: 35, width: 35 }} />
            <SocialIcon url="https://linkedin.com" style={{ height: 35, width: 35 }} />
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