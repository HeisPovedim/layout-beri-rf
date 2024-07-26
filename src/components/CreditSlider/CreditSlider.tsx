import Image from "next/image";
import Slider from "@/components/common/Slider/Slider";

import style from "./CreditSlider.module.scss";
import imageDesktop from "./img/credit-slider-human.svg";
import imageMobile from "./img/credit-slider-human-mobile.svg";

export default function CreditSlider(): JSX.Element {
  return (
    <div className={style.creditSlider}>
      <div className={style.creditSlider__info}>
        <Image
          className={style.creditSlider__info__imageDesktop}
          src={imageDesktop}
          alt=""
        />
        <Image
          className={style.creditSlider__info__imageMobile}
          src={imageMobile}
          alt=""
        />
      </div>
      <div className={style.creditSlider__getMoney}>
        <h1 className={style.creditSlider__getMoney__title}>
          Кредит без залога
        </h1>
        <p className={style.creditSlider__getMoney__description}>
          Деньги у вас через <span>10:32</span>
        </p>
        <div className={style.creditSlider__getMoney__slider}>
          <Slider />
          <div className={style.creditSlider__getMoney__price}>
            <span>1000₽</span>
            <span>100000₽</span>
          </div>
        </div>
        <button
          className={`${style.creditSlider__getMoney__button} custom-button-orange`}
        >
          Взять деньги
        </button>
      </div>
    </div>
  );
}
