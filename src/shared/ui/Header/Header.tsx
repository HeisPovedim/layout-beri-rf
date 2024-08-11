"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Button from "@shared/ui/Button/Button";
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
        <Button
          customClassName={`${style["header__logIn"]}`}
          variant="blue"
          type="button"
          text="Войти"
        />
      </div>
      <AnimatePresence>
        {isActiveBurger && (
          <motion.nav
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={style.header__navMobile}
          >
            <NavMenu />
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
