import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-500 p-4 text-white text-center">
      &copy; {new Date().getFullYear()} Recipe Sharing Platform. All rights reserved.
    </footer>
  );
};

export default Footer;
