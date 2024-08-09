"use client";
import { useState } from "react";
import Link from "next/link";

import Image from "next/image";
import Slider from "@/shared/slider/slider";

import style from "./GetMoney.module.scss";

import imageDesktop from "./img/credit-slider-human.svg";
import imageMobile from "./img/credit-slider-human-mobile.svg";

export default function GetMoney(): JSX.Element {
  const [sliderValue, setSliderValue] = useState<number>(1000);

  return (
    <div className={style.getMoney}>
      <section className={style.getMoney__info}>
        <Image
          className={style.getMoney__info_imageDesktop}
          src={imageDesktop}
          alt=""
        />
        <Image
          className={style.getMoney__info_imageMobile}
          src={imageMobile}
          alt=""
        />
      </section>
      <section className={style.getMoney__slider}>
        <h1 className={style.getMoney__slider_title}>Кредит без залога</h1>
        <p className={style.getMoney__slider_description}>
          Деньги у вас через <span>10:32</span>
        </p>
        <div className={style.getMoney__slider_choice}>
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
          <div>
            <span>1000 ₽</span>
            <span>100 000 ₽</span>
          </div>
        </div>
        <Link
          href={`/application-credit?amount=${sliderValue}`}
          style={{ width: "100%" }}
        >
          <button
            className={`${style.getMoney__slider_button} custom-btn-orange`}
          >
            Взять деньги
          </button>
        </Link>
      </section>
    </div>
  );
}
