import React from "react";

import { FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#121212] py-5 text-white">
      <div className="flex justify-center py-8 border-b-2 border-[#202020]">
        <div className="mx-3 cursor-pointer hover:-translate-y-3 transition-all duration-250 ease-in-out">
          <a href="https://www.instagram.com/sqcsaba/" target="_blank">
            <FaInstagram size={30} />
          </a>
        </div>
        <div className="mx-3 cursor-pointer hover:-translate-y-3 transition-all duration-250 ease-in-out">
          <a href="https://www.tiktok.com/@sqcsaba" target="_blank">
            <FaTiktok size={30} />
          </a>
        </div>
      </div>
      <div className="text-xl text-center py-8">
        &copy; 2022, Minden jog fenntartva - gardenfxlife
      </div>
    </div>
  );
};

export default Footer;
