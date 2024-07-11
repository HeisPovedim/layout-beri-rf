import Header from "../components/header/Header";
import Slider from "../components/slider/Slider";
import style from "./page.module.scss";

export default function Home() {
  return (
    <>
      <Header />
      <div className={style.box_slider}>
        <span className={style.box_slider__title}>Кредит без залога</span>
        <span className={style.box_slider__description}>
          Деньги у вас через <span>10:32</span>
        </span>
        <div className={style.box_slider__slider}>
          <Slider/>
          <div className={style.box_slider__slider_price}>
            <span>1000₽</span>
            <span>100000₽</span>
          </div>
        </div>
        <div className={style.box_slider__button}>Взять деньги</div>
      </div>
    </>
  );
}
