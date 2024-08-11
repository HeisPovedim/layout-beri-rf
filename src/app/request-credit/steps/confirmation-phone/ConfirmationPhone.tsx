"use client";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";

import FormInputNumberFormat from "@/components/form-inputs/form-input-number-format";

import Button from "@shared/ui/Button/Button";

import style from "./ConfirmationPhone.module.scss";
import ImgCover from "./img/cover.png";

export default function ConfirmationPhone(): JSX.Element {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all", shouldUnregister: true });
  const [code, setCode] = useState<number | null>(null);

  return (
    <div className={style["confirmation-phone"]}>
      <h2 className={style["confirmation-phone_title"]}>
        Чтобы мы смогли прислать смс с решением от банка
      </h2>
      <div className={style["confirmation-phone__sections-wrapper"]}>
        <section className={style["confirmation-phone__valid-code"]}>
          <div className={style["valid-code__current-phone"]}>
            <p className={style["valid-code__current-phone_phone"]}>
              +7 (999) 999-99-99
            </p>
            <Button
              customClassName={style["valid-code__current-phone_btn"]}
              variant="blue-underline"
              type="button"
              text="Изменить"
            />
          </div>
          <form className={style["valid-code__approval"]}>
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
            <Button
              customClassName={`${style["valid-code__approval_retry"]}`}
              variant="blue-underline"
              type="button"
              text="Отправить повторно смс с кодом"
            />
            <Button
              customClassName={`${style["valid-code__approval_resume"]}`}
              variant="orange"
              type="submit"
              text="Продолжить"
            />
          </form>
        </section>
        <section className={style["confirmation-phone__cover"]}>
          <Image src={ImgCover} alt="SMS Код" />
        </section>
      </div>
    </div>
  );
}
