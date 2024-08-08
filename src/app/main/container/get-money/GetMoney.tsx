"use client";
import { useState } from "react";
import Link from "next/link";

import Image from "next/image";
import Slider from "@/shared/slider/slider";

import style from "./GetMoney.module.scss";
import "./styles/slider.scss";

import imageDesktop from "./img/credit-slider-human.svg";
import imageMobile from "./img/credit-slider-human-mobile.svg";

export default function GetMoney(): JSX.Element {
  const [sliderValue, setSliderValue] = useState<number>(1000);

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
        <h1 className={style.getMoney__slider__title}>Кредит без залога</h1>
        <p className={style.getMoney__slider__description}>
          Деньги у вас через <span>10:32</span>
        </p>
        <div className={style.getMoney__slider__slider}>
          <Slider
            min={1000}
            max={100000}
            step={1000}
            start={20000}
            symbolTooltip="₽"
            tooltip={true}
            styles={{
              colorSlider: "#E84B37",
              colorThumb: "#E84B37",
              colorThumbOpacity: "#E84B372E",
            }}
            onChange={(val: number) => setSliderValue(val)}
          />
          <div className={style.getMoney__slider__price}>
            <span>1000₽</span>
            <span>100000₽</span>
          </div>
        </div>
        <Link
          href={`/application-credit?amount=${sliderValue}`}
          style={{ width: "100%" }}
        >
          <button
            className={`${style.getMoney__slider__button} custom-button-orange`}
          >
            Взять деньги
          </button>
        </Link>
      </div>
    </div>
  );
}
