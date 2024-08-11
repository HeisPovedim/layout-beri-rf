"use client";
import { useState } from "react";
import { FieldValue, SubmitHandler, useForm } from "react-hook-form";
import { useSearchParams } from "next/navigation";

import FormInputText from "@components/form-inputs/form-input-text";
import FormInputDate from "@components/form-inputs/form-input-date";
import FormInputNumberFormat from "@components/form-inputs/form-input-number-format";
import FormInputEmail from "@components/form-inputs/form-input-email";
import Slider from "@shared/slider/slider";

import { RegForInitials } from "@helpers/reg-set";
import { RepWordUp } from "@helpers/rep-word-up";

import { ISliderValue, IDataForm } from "./IGeneralInformation";

import style from "./GeneralInformation.module.scss";

export default function GeneralInformation() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });

  const [sliderValues, setSliderValues] = useState<ISliderValue>({
    amount: parseInt(useSearchParams().get("amount") || "1000", 10),
    days: 5,
  });

  const [dataForm, setDataForm] = useState<IDataForm>({
    firstName: "",
    lastName: "",
    middleName: "",
    numberDate: null,
    numberPhone: null,
    email: "",
    checkbox: false,
  });

  const submit: SubmitHandler<FieldValue<any>> = (data) => {
    console.log(data);
  };

  return (
    <div className={style["general-info"]}>
      <section className={style["general-info__sliders"]}>
        <h2 className={style["sliders__title"]}>Какая сумма вам нужна?</h2>
        <div className={style["sliders__grid"]}>
          <div className={style["sliders__grid__item"]}>
            <Slider
              min={1000}
              max={100000}
              step={1000}
              start={sliderValues.amount}
              symbolTooltip=""
              description={["1000 ₽", "100 000 ₽"]}
              styles={{
                colorSlider: "#6588ff",
                colorThumb: "#6588ff",
                colorThumbOpacity: "#6588FF2E",
              }}
              onChange={(val: number) =>
                setSliderValues({ ...sliderValues, amount: val })
              }
            />
            <p className={style["sliders__grid__item__value"]}>
              Сумма: {sliderValues.amount.toLocaleString("ru-RU")} ₽
            </p>
          </div>
          <div className={style["sliders__grid__item"]}>
            <Slider
              min={5}
              max={180}
              step={1}
              start={sliderValues.days}
              symbolTooltip=""
              description={["5 дней", "180 дней"]}
              styles={{
                colorSlider: "#6588ff",
                colorThumb: "#6588ff",
                colorThumbOpacity: "#6588FF2E",
              }}
              onChange={(val: number) =>
                setSliderValues({ ...sliderValues, days: val })
              }
            />
            <p className={style["sliders__grid__item__value"]}>
              Срок: {sliderValues.days} дней
            </p>
          </div>
        </div>
      </section>
      <section className={style["general-info__data"]}>
        <h2 className={style["data__title"]}>Общая информация</h2>
        <form className={style["data__form"]} onSubmit={handleSubmit(submit)}>
          <div className={style["data__form__fields"]}>
            <FormInputText
              control={control}
              value={dataForm.firstName}
              type="firstName"
              placeholder="Имя"
              minLength={2}
              maxLength={30}
              pattern={RegForInitials}
              patternValid={/^[^A-Za-z]+$/gi}
              onChange={(event) =>
                setDataForm({
                  ...dataForm,
                  firstName: RepWordUp(event.replace(RegForInitials, "")),
                })
              }
              error={errors}
            />
            <FormInputText
              control={control}
              value={dataForm.middleName}
              type="middleName"
              placeholder="Отчество"
              minLength={2}
              maxLength={30}
              pattern={RegForInitials}
              patternValid={/^[^A-Za-z]+$/gi}
              onChange={(event) =>
                setDataForm({
                  ...dataForm,
                  middleName: RepWordUp(event.replace(RegForInitials, "")),
                })
              }
              error={errors}
            />
            <FormInputText
              control={control}
              value={dataForm.lastName}
              type="lastName"
              placeholder="Фамилия"
              minLength={2}
              maxLength={30}
              pattern={RegForInitials}
              patternValid={/^[^A-Za-z]+$/gi}
              onChange={(event) =>
                setDataForm({
                  ...dataForm,
                  lastName: RepWordUp(event.replace(RegForInitials, "")),
                })
              }
              error={errors}
            />
            <FormInputDate
              control={control}
              value={dataForm.numberDate}
              type="numberDate"
              placeholder="Дата рождения"
              format="##/##/####"
              onChange={(event) =>
                setDataForm({ ...dataForm, numberDate: event })
              }
              error={errors}
            />
            <FormInputNumberFormat
              control={control}
              value={dataForm.numberPhone}
              type="numberPhone"
              placeholder="Мобильный телефон"
              format="+7 (###) ###-####"
              mask="_"
              minLength={10}
              error={errors}
              errorMessage="*Заполните полностью номер телефона"
              onChange={(event) =>
                setDataForm({ ...dataForm, numberPhone: event })
              }
            />
            <FormInputEmail
              control={control}
              value={dataForm.email}
              type="email"
              placeholder="Электронная почта"
              onChange={(event) => setDataForm({ ...dataForm, email: event })}
              error={errors}
            />
          </div>
          <div className={style["data__form__resume"]}>
            <div className={style["data__form__resume__btn"]}>
              <button
                className="custom-btn-orange"
                disabled={!dataForm.checkbox}
              >
                Продолжить
              </button>
              {!dataForm.checkbox && (
                <p
                  className={`${style["data__form__resume--valid-checkbox"]} form-error-message`}
                >
                  *Вы должны согласиться с политикой обработки
                  <br />
                  персональных данных
                </p>
              )}
            </div>
            <div className={style["data__form__resume__checkbox"]}>
              <input
                className="custom-checkbox"
                type="checkbox"
                id="check-label"
                checked={dataForm.checkbox}
                onChange={() => {
                  setDataForm({ ...dataForm, checkbox: !dataForm.checkbox });
                }}
              />
              <label htmlFor="check-label" />
              <p className={style["data__form__resume__checkbox__assent"]}>
                Я согласен с{" "}
                <span>Политикой обработки персональных данных</span>, а также
                предоставляю{" "}
                <span>Согласие на обработку персональных данных</span>.
              </p>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}
