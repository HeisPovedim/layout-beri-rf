// LIBRARIES
import { useState } from "react";
import { useForm } from "react-hook-form";

// INPUTS
import FormInputNumberFormat from "@/components/form-inputs/form-input-number-format";

// UI
import ModalWindow from "@shared/ui/ModalWindow/ModalWindow";
import Button from "@shared/ui/Button/Button";

// STYLES
import style from "./change-current-phone.module.scss";

interface IChangeCurrentPhone {
  isOpen: boolean;
  isClose: () => void;
  onSubmit?: (data: any, type: string) => void;
}

export default function ChangeCurrentPhone(
  props: IChangeCurrentPhone
): JSX.Element {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <ModalWindow isOpen={props.isOpen} isClose={props.isClose}>
      <div className={style["modalWindow__changeCurrentPhone"]}>
        <form
          className={style["modalWindow__changeCurrentPhone_form"]}
          action=""
          onSubmit={handleSubmit(onSubmit)}
        >
          {" "}
          <FormInputNumberFormat
            customClassName={style["modalWindow__changeCurrentPhone_input"]}
            control={control}
            value={null}
            type="numberPhone"
            placeholder="Мобильный телефон"
            format="+7 (###) ###-####"
            mask="_"
            minLength={10}
            error={errors}
            errorMessage="*Заполните полностью номер телефона"
            onChange={(event) => console.log(event)}
          />
          <Button
            customClassName={`${style["modalWindow__changeCurrentPhone_btn"]}`}
            variant="orange"
            type="submit"
            text="Изменить"
          />
        </form>
      </div>
    </ModalWindow>
  );
}
