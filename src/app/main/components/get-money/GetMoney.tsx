"use client";
import Image from "next/image";
import Slider from "@/components/common/Slider/Slider";

import style from "./GetMoney.module.scss";
import imageDesktop from "./img/credit-slider-human.svg";
import imageMobile from "./img/credit-slider-human-mobile.svg";

export default function GetMoney(): JSX.Element {
  return (
    <div className={style.getMoney}>
      <div className={style.getMoney__info}>
        <Image
          className={style.getMoney__info__imageDesktop}
          src={imageDesktop}
          alt=""
        />
        <Image
          className={style.getMoney__info__imageMobile}
          src={imageMobile}
          alt=""
        />
      </div>
      <div className={style.getMoney__slider}>
        <h1 className={style.getMoney__slider__title}>
          Кредит без залога
        </h1>
        <p className={style.getMoney__slider__description}>
          Деньги у вас через <span>10:32</span>
        </p>
        <div className={style.getMoney__slider__slider}>
          <Slider
            min={1000}
            max={100000}
            step={1000}
            start={20000}
            descriptors="₽"
            tooltip={true}
            onChange={(value: number[]) => console.log(value)}
          />
          <div className={style.getMoney__slider__price}>
            <span>1000₽</span>
            <span>100000₽</span>
          </div>
        </div>
        <button
          className={`${style.getMoney__slider__button} custom-button-orange`}
        >
          Взять деньги
        </button>
      </div>
    </div>
  );
}
