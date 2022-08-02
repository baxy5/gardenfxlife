import React from "react";
import Link from "next/link";

import styles from "../../styles/LinkUnderline.module.css";

const Nav = () => {
  return (
    <div className="nav text-white py-4">
      <ul className="flex justify-center">
        <li className="mx-3 p-2">
          <Link href="/">
            <a className={styles.underline_animation}>Home</a>
          </Link>
        </li>
        <li className="mx-3 p-2">
          <Link href="/info">
            <a className={styles.underline_animation}>Mi az a forex?</a>
          </Link>
        </li>
        <li className="mx-3 p-2">
          <Link href="/course">
            <a className={styles.underline_animation}>Ingyen Forex Suli</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
