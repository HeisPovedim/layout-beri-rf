"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

// Components
import FormInputText from "@components/form-inputs/form-input-text";
import FormInputDate from "@components/form-inputs/form-input-date";
import FormInputPhone from "@components/form-inputs/form-input-phone";
import FormInputEmail from "@components/form-inputs/form-input-email";
import Slider from "@shared/slider/slider";

// Helpers
import { RegForInitials } from "@helpers/reg-set";
import { RepWordUp } from "@helpers/rep-word-up";

// Interface
import { ISliderValue, IGeneralInfo } from "./IApplication";

// Styles
import style from "./Application.module.scss";
import "./styles/slider.scss";
import { useSearchParams } from "next/navigation";

export default function Application(): JSX.Element {
  const [sliderValues, setSliderValues] = useState<ISliderValue>({
    amount: parseInt(useSearchParams().get("amount") || "0", 10),
    days: 5,
  });

  const [generalInfo, setGeneralInfo] = useState<IGeneralInfo>({
    firstName: "",
    lastName: "",
    middleName: "",
    numberDate: null,
    numberPhone: null,
    email: "",
  });

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
                start={sliderValues.amount}
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
            className={style.application__generalInfo__form}
            onSubmit={(data) => console.log(data)}
          >
            <div className={style.application__generalInfo__form__inputs}>
              <FormInputText
                value={generalInfo.firstName}
                type="firstName"
                placeholder="Имя"
                minLength={2}
                maxLength={30}
                pattern={RegForInitials}
                patternValid={/^[^A-Za-z]+$/gi}
                onChange={(event) =>
                  setGeneralInfo({
                    ...generalInfo,
                    firstName: RepWordUp(event.replace(RegForInitials, "")),
                  })
                }
              />
              <FormInputText
                value={generalInfo.middleName}
                type="middleName"
                placeholder="Отчество"
                minLength={2}
                maxLength={30}
                pattern={RegForInitials}
                patternValid={/^[^A-Za-z]+$/gi}
                onChange={(event) =>
                  setGeneralInfo({
                    ...generalInfo,
                    middleName: RepWordUp(event.replace(RegForInitials, "")),
                  })
                }
              />
              <FormInputText
                value={generalInfo.lastName}
                type="lastName"
                placeholder="Фамилия"
                minLength={2}
                maxLength={30}
                pattern={RegForInitials}
                patternValid={/^[^A-Za-z]+$/gi}
                onChange={(event) =>
                  setGeneralInfo({
                    ...generalInfo,
                    lastName: RepWordUp(event.replace(RegForInitials, "")),
                  })
                }
              />
              <FormInputDate
                value={generalInfo.numberDate}
                type="numberDate"
                placeholder="Дата рождения"
                format="##/##/####"
                onChange={(event) =>
                  setGeneralInfo({ ...generalInfo, numberDate: event })
                }
              />
              <FormInputPhone
                value={generalInfo.numberPhone}
                type="numberPhone"
                placeholder="Мобильный телефон"
                format="+7 (###) ###-####"
                onChange={(event) =>
                  setGeneralInfo({ ...generalInfo, numberPhone: event })
                }
              />
              <FormInputEmail
                value={generalInfo.email}
                type="email"
                placeholder="Электронная почта"
                onChange={(event) =>
                  setGeneralInfo({ ...generalInfo, email: event })
                }
              />
            </div>
            <div className={style.application__generalInfo__form__button}>
              <button>Продолжить</button>
              <input type="checkbox" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
