import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center py-4 mt-12 text-sm text-gray-500">
      &copy; {new Date().getFullYear()} Neha | Built with ❤️ using React & Tailwind CSS
    </footer>
  );
};

export default Footer;
