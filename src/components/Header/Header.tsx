import Link from "next/link";
import Image from "next/image";
import Hamburger from "@common/Hamburger/Hamburger";
import logo from "@assets/logo.svg";

import style from "./Header.module.scss";

export default function CHeader() {
  return (
    <>
      <div className={style.header}>
        <Hamburger />
        <Image src={logo} alt="Logo" />
        <div className={style.header__menu}>
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
        </div>
        <button className={`${style.header__logIn} custom-button-blue`}>
          Войти
        </button>
      </div>
    </>
  );
}
