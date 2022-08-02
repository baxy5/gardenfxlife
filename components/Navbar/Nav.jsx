import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="nav text-white py-4">
      <ul className="flex justify-center">
        <li className="mx-3 hover:bg-[#1e3d68] p-2 rounded transition-all duration-200 ease-in-out">
          <Link href="/">
            <a className="underline underline-offset-2">Home</a>
          </Link>
        </li>
        <li className="mx-3 hover:bg-[#1e3d68] p-2 rounded transition-all duration-200 ease-in-out">
          <Link href="/">
            <a className="underline underline-offset-2">Mi az a forex?</a>
          </Link>
        </li>
        <li className="mx-3 hover:bg-[#1e3d68] p-2 rounded transition-all duration-200 ease-in-out">
          <Link href="/">
            <a className="underline underline-offset-2">Ingyen Forex Suli</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
