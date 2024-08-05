"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import NavMenu from "@components/nav-menu/nav-menu";
import Hamburger from "@components/hamburger/hamburger";
import logo from "@assets/logo.svg";

import style from "./Header.module.scss";

export default function CHeader(): JSX.Element {
  const [isActiveBurger, setIsActiveBurger] = useState<boolean>(false);

  const handleChangeBurger = (event: boolean) => {
    setIsActiveBurger(event);
  };

  return (
    <>
      <div className={style.header}>
        <Hamburger onStateChange={handleChangeBurger} />
        <Image src={logo} alt="Logo" />
        <nav className={style.header__navDesktop}>
          <NavMenu />
        </nav>
        <button className={`${style.header__logIn} custom-button-blue`}>
          Войти
        </button>
      </div>
      <AnimatePresence>
        {isActiveBurger && (
          <motion.nav
            initial={{ opacity: 0, y: -30 }} // Начальное состояние
            animate={{ opacity: 1, y: 0 }} // Конечное состояние
            exit={{ opacity: 0, y: -20 }} // Состояние при выходе
            transition={{ duration: 0.3 }} // Длительность анимации
            className={style.header__navMobile}
          >
            <NavMenu />
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
