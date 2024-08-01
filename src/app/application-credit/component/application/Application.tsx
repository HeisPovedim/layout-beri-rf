"use client";
import { useState } from "react";

// Components
import { FormInput, FormInputNumber } from "../FormInput/FormInput";
import Slider from "@common/Slider/Slider";

// Helpers
import { RegForInitials } from "@helpers/reg-set";
import { RepWordUp } from "@helpers/rep-word-up";

// Interface
import { IFio, ISliderValue } from "../interfase";

// Styles
import style from "./Application.module.scss";
import "./styles/slider.scss";

export default function Application(): JSX.Element {
  const [sliderValues, setSliderValues] = useState<ISliderValue>({
    amount: 1000,
    days: 5,
  });

  const [fio, setFio] = useState<IFio>({
    firstName: "",
    lastName: "",
    middleName: "",
    phone: 0,
  });

  const [email, setEmail] = useState<string>();
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <div className={style.application}>
      <h1 className={style.application__title}>Заявка на получение кредита</h1>
      <div className={style.application__wrap}>
        <h2 className={style.application__contact}>Контактная информация</h2>
        <div className={style.application__amount}>
          <h2 className={style.application__amount__title}>
            Какая сумма вам нужна?
          </h2>
          <div className={style.application__amount__sliders}>
            <div className={style.application__amount__sliderSum}>
              <Slider
                min={1000}
                max={100000}
                step={1000}
                start={1000}
                descriptors="₽"
                tooltip={false}
                onChange={(values: number[]) =>
                  setSliderValues({ ...sliderValues, amount: values[0] })
                }
              />
              <div>
                <p>1 000 ₽</p>
                <p>100 000 ₽</p>
              </div>
              <p>Сумма: {sliderValues.amount.toLocaleString("ru-RU")} ₽</p>
            </div>
            <div className={style.application__amount__sliderDays}>
              <Slider
                min={5}
                max={180}
                step={1}
                start={5}
                descriptors="дней"
                tooltip={false}
                onChange={(values: number[]) =>
                  setSliderValues({ ...sliderValues, days: values[0] })
                }
              />
              <div>
                <p>5 дней</p>
                <p>180 дней</p>
              </div>
              <p>Срок: {sliderValues.days} дней</p>
            </div>
          </div>
        </div>
        <div className={style.application__generalInfo}>
          <h2 className={style.application__generalInfo__title}>
            Общая информация
          </h2>
          <form
            className={style.application__generalInfo__inputs}
            onSubmit={(data) => console.log(data)}
          >
            <FormInput
              value={fio.firstName}
              type="firstName"
              placeholder="Имя"
              minLength={2}
              maxLength={30}
              pattern={RegForInitials}
              patternValid={/^[^A-Za-z]+$/gi}
              onChange={(event) =>
                setFio({
                  ...fio,
                  firstName: RepWordUp(event.replace(RegForInitials, "")),
                })
              }
            />
            <FormInput
              value={fio.middleName}
              type="middleName"
              placeholder="Отчество"
              minLength={2}
              maxLength={30}
              pattern={RegForInitials}
              patternValid={/^[^A-Za-z]+$/gi}
              onChange={(event) =>
                setFio({
                  ...fio,
                  middleName: RepWordUp(event.replace(RegForInitials, "")),
                })
              }
            />
            <FormInput
              value={fio.lastName}
              type="lastName"
              placeholder="Фамилия"
              minLength={2}
              maxLength={30}
              pattern={RegForInitials}
              patternValid={/^[^A-Za-z]+$/gi}
              onChange={(event) =>
                setFio({
                  ...fio,
                  lastName: RepWordUp(event.replace(RegForInitials, "")),
                })
              }
            />
            <FormInputNumber
              format="##.##.####"
              onChange={(event) => setFio({ ...fio, phone: event})}
            />
            {/* <input className={"custom-input"} placeholder="Дата рождения" /> */}
            {/* <input className={"custom-input"} placeholder="Мобильный телефон" />
            <input className={"custom-input"} placeholder="Электронная почта" /> */}
          </form>
        </div>
      </div>
    </div>
  );
}
