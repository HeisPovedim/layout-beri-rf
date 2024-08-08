"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

// Inputs
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

export default function app(): JSX.Element {
  const [sliderValues, setSliderValues] = useState<ISliderValue>({
    amount: parseInt(useSearchParams().get("amount") || "1000", 10),
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
    <div className={style.app}>
      <h1 className={style.app__title}>Заявка на получение кредита</h1>
      <div className={style.app__box}>
        <h2 className={style.app__contact}>Контактная информация</h2>
        <div className={style.app__sliders}>
          <h2 className={style.app__sliders__title}>Какая сумма вам нужна?</h2>
          <div className={style.app__sliders__box}>
            <div className={style.app__sliders__sliderSum}>
              <Slider
                min={1000}
                max={100000}
                step={1000}
                start={sliderValues.amount}
                symbolTooltip=""
                tooltip={false}
                styles={{
                  colorSlider: "#6588ff",
                  colorThumb: "#6588ff",
                  colorThumbOpacity: "#6588FF2E",
                }}
                onChange={(val: number) =>
                  setSliderValues({ ...sliderValues, amount: val })
                }
              />
              <div>
                <p>1 000 ₽</p>
                <p>100 000 ₽</p>
              </div>
              <p>Сумма: {sliderValues.amount.toLocaleString("ru-RU")} ₽</p>
            </div>
            <div className={style.app__sliders__sliderDays}>
              <Slider
                min={5}
                max={180}
                step={1}
                start={sliderValues.days}
                symbolTooltip=""
                tooltip={false}
                styles={{
                  colorSlider: "#6588ff",
                  colorThumb: "#6588ff",
                  colorThumbOpacity: "#6588FF2E",
                }}
                onChange={(val: number) =>
                  setSliderValues({ ...sliderValues, days: val })
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
        <div className={style.app__data}>
          <h2 className={style.app__data__title}>Общая информация</h2>
          <form
            className={style.app__data__form}
            onSubmit={(data) => console.log(data)}
          >
            <div className={style.app__data__form__inputs}>
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
            <div className={style.app__data__form__buttons}>
              <button
                className={`${style.app__data__form__btn} custom-btn-orange`}
              >
                Продолжить
              </button>
              <div className={style.app__data__form__checkbox}>
                <input
                  className="custom-checkbox"
                  type="checkbox"
                  id="check-label"
                />
                <label htmlFor="check-label" />
                <p>
                  Я согласен с{" "}
                  <span>Политикой обработки персональных данных</span>, а также
                  предоставляю{" "}
                  <span>Согласие на обработку персональных данных</span>.
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
