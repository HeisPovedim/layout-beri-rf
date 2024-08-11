"use client";
import { useState } from "react";
import Link from "next/link";

import Image from "next/image";
import Slider from "@/shared/slider/slider";

import style from "./GetMoney.module.scss";

import imageDesktop from "./img/credit-slider-human.svg";
import imageMobile from "./img/credit-slider-human-mobile.svg";

export default function GetMoney(): JSX.Element {
  const [sliderValue, setSliderValue] = useState<number>(20000);

  return (
    <div className={style["get-money"]}>
      <section className={style["get-money__cove"]}>
        <Image
          className={style["get-money__cover--desktop"]}
          src={imageDesktop}
          alt=""
        />
        <Image
          className={style["get-money__cover--mobile"]}
          src={imageMobile}
          alt=""
        />
      </section>
      <section className={style["get-money__slider"]}>
        <h1 className={style["get-money__slider__title"]}>Кредит без залога</h1>
        <p className={style["get-money__slider__description"]}>
          Деньги у вас через <span>10:32</span>
        </p>
        <div className={style["get-money__slider__choice"]}>
          <Slider
            min={1000}
            max={100000}
            step={1000}
            start={sliderValue}
            symbolTooltip="₽"
            description={["1000 ₽", "100 000 ₽"]}
            styles={{
              colorSlider: "#E84B37",
              colorThumb: "#E84B37",
              colorThumbOpacity: "#E84B372E",
            }}
            onChange={(val: number) => setSliderValue(val)}
          />
        </div>
        <Link
          href={`/application-credit?amount=${sliderValue}`}
          style={{ width: "100%" }}
        >
          <button
            className={`${style["get-money__slider__btn"]} custom-btn-orange`}
          >
            Взять деньги
          </button>
        </Link>
      </section>
    </div>
  );
}
