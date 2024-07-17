import Image from "next/image";
import logo from "../../../assets/logo.svg";
import style from "./Header.module.scss";

export default function CHeader() {
  return (
    <>
      <div className={style.header}>
        <Image src={logo} alt="Logo" />
        <div className={style.header__menu}>
          <span>О нас</span>
          <span>Подбор кредита</span>
          <span>Новости</span>
          <span>Контакты</span>
        </div>
        <div className={`${style.header__logIn} button`}>Войти</div>
      </div>
    </>
  );
}
