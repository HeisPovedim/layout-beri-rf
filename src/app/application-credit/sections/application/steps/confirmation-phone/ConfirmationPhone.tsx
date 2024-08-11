"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";

import FormInputNumberFormat from "@/components/form-inputs/form-input-number-format";

import Button from "@shared/ui/Button/Button";

import style from "./ConfirmationPhone.module.scss";

export default function ConfirmationPhone(): JSX.Element {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all", shouldUnregister: true });
  const [code, setCode] = useState<number | null>(null);

  return (
    <div className={style["confirmation-phone"]}>
      <div className={style["confirmation-phone__container"]}>
        <section className={style["confirmation-phone__valid-code"]}>
          <h2 className={style["confirmation-phone__valid-code__title"]}>
            Чтобы мы смогли прислать смс с решением от банка
          </h2>
          <div className={style["confirmation-phone__valid-code__current"]}>
            <p
              className={style["confirmation-phone__valid-code__current__text"]}
            >
              +7 (999) 999-99-99
            </p>
            <button
              className={style["confirmation-phone__valid-code__current__btn"]}
            >
              Изменить
            </button>
          </div>
          <form className={style["confirmation-phone__valid-code__approval"]}>
            <FormInputNumberFormat
              control={control}
              value={null}
              type="code"
              placeholder="Код подтверждения"
              format="####"
              mask=" "
              minLength={4}
              error={errors}
              errorMessage="*Заполните полностью поле"
              onChange={(val) => setCode(val)}
            />
            <button
              className={
                style["confirmation-phone__valid-code__approval__retry"]
              }
            >
              Отправить повторное смс с кодом
            </button>
            <Button
              customClassName={`${style["confirmation-phone__valid-code__approval__resume"]} custom-btn-orange`}
              variant="orange"
              type="submit"
              text="Продолжить"
            />
          </form>
        </section>
      </div>
    </div>
  );
}
