import React from "react";
import {FaSlackHash} from 'react-icons/fa';

function Footer() {
  const footerYear = new Date().getUTCFullYear();

  return (
    <footer className="footer p-10 bg-gray-700 text-primary-content footer-center">
        <div>
            <FaSlackHash/>
            <p>Copyright &copy; {footerYear}</p>
        </div>
    </footer>
  );
}

export default Footer;
