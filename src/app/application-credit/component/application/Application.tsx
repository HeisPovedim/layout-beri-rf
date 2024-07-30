"use client";
import { useState } from "react";
import Slider from "@common/Slider/Slider";

import style from "./Application.module.scss";

export default function Application(): JSX.Element {
  const [sumSliderValues, setSumSliderValues] = useState<number>();
  const [daysSliderValues, setDaysSliderValues] = useState<number>();

  return (
    <div className={style.getLoan}>
      <h1 className={style.getLoan__title}>Заявка на получение кредита</h1>
      <div className={style.getLoan__wrap}>
        <h2 className={style.getLoan__wrap__contact}>Контактная информация</h2>
        <div className={style.getLoan__wrap__amount}>
          <h2 className={style.getLoan__wrap__amount__title}>
            Какая сумма вам нужна?
          </h2>
          <div className={style.getLoan__wrap__amount__sliders}>
            <div className={style.getLoan__wrap__amount__sliderLeft}>
              <Slider
                min={1000}
                max={100000}
                step={1000}
                start={1000}
                descriptors="₽"
                tooltip={false}
                onChange={(values: number[]) => setSumSliderValues(values[0])}
              />
              <div>Сумма: {sumSliderValues}</div>
            </div>
            <div className={style.getLoan__wrap__amount__sliderRight}>
              <Slider
                min={5}
                max={180}
                step={1}
                start={5}
                descriptors="дней"
                tooltip={false}
                onChange={(values: number[]) => setDaysSliderValues(values[0])}
              />
              <div>Дней: {daysSliderValues}</div>
            </div>
          </div>
        </div>
        <div className={style.getLoan__wrap__generalInfo}></div>
      </div>
    </div>
  );
}
