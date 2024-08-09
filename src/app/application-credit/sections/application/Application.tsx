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

import { ISliderValue, IDataForm } from "./IApplication";

import style from "./Application.module.scss";

export default function App(): JSX.Element {
  const {
    control,
    register,
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
    <div className={style.app}>
      <h1 className={style.app__title}>Заявка на получение кредита</h1>
      <div className={style.app__container}>
        <h2 className={style.app__contact}>Контактная информация</h2>
        <section className={style.app__sliders}>
          <h2 className={style.app__sliders_title}>Какая сумма вам нужна?</h2>
          <div className={style.app__sliders_grid}>
            <div className={style.app__sliders_sum}>
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
            <div className={style.app__sliders_day}>
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
        </section>
        <section className={style.app__data}>
          <h2 className={style.app__data_title}>Общая информация</h2>
          <form
            className={style.app__data_form}
            onSubmit={handleSubmit(submit)}
          >
            <div className={style.app__data_fields}>
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
                onChange={(event) =>
                  setDataForm({ ...dataForm, numberPhone: event })
                }
                error={errors}
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
            <div className={style.app__data_resume}>
              <div className={style.app__data_button}>
                <button
                  className="custom-btn-orange"
                  disabled={!dataForm.checkbox}
                >
                  Продолжить
                </button>
                {!dataForm.checkbox && (
                  <p className={style.app__data_form__checkbox__error}>
                    *Вы должны согласиться с политикой обработки
                    <br />
                    персональных данных
                  </p>
                )}
              </div>
              <div className={style.app__data_checkbox}>
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
                <p>
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
    </div>
  );
}
