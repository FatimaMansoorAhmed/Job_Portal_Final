import React from "react";

const Footer = () => {
  return (
    <footer className="bg-backgroundBlue text-white text-center p-3 text-sm h-[15vh] flex items-center justify-center">
      <p>© {new Date().getFullYear()} MyJobSite. All Rights Reserved.</p>
      
    </footer>
  );
};

export default Footer;
