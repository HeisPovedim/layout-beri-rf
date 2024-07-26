"use client";
import React, { useState } from "react";
import Link from "next/link";
import style from "./Hamburger.module.scss";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className={style.hamburger}>
      <button
        className={style.hamburger__btn}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav
        className={`${style.hamburger__nav} ${
          isOpen ? style.hamburger__nav_open : style.hamburger__nav_close
        }`}
      >
        <ul>
          <li>
            <Link href={"/about"}>О нас</Link>
          </li>
          <li>
            <Link href={"/loan-credit"}>Подбор кредита</Link>
          </li>
          <li>
            <Link href={"/news"}>Новость</Link>
          </li>
          <li>
            <Link href={"/contact"}>Контакты</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Hamburger;
