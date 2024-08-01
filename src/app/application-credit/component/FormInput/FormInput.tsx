import { useForm } from "react-hook-form";

import NumberFormat, { PatternFormat } from "react-number-format";
import { IMaskInput } from "react-imask";

import { IFormInput, IFormInputNumber } from "../interfase";

import style from "./FormInput.module.scss";

export function FormInput(props: IFormInput): JSX.Element {
  const {
    register,
    formState: { errors },
  } = useForm({ mode: "all" });

  const errorMessage = errors[props.type]?.message as string;

  return (
    <div className={style.inputWrap}>
      <input
        className="custom-input"
        placeholder={props.placeholder}
        value={props.value}
        {...register(props.type, {
          required: true,
          minLength: {
            value: props.minLength,
            message: "*Минимум 2 символа",
          },
          maxLength: {
            value: props.maxLength,
            message: "*Не больше 30 символов",
          },
          pattern: {
            value: props.patternValid,
            message: "*Допустим ввод только русских символов",
          },
          onChange: (event) => props.onChange(event.target.value),
        })}
      />
      <p>
        {errorMessage && (
          <span>{errorMessage || `*Необходимо заполнить поле "Фамилия"`}</span>
        )}
      </p>
    </div>
  );
}

export function FormInputNumber(props: IFormInputNumber): JSX.Element {
  const {
    register,
    formState: { errors },
  } = useForm({ mode: "all" });

  // const errorMessage = errors[props.type]?.message as string;

  return (
    <PatternFormat
      format={props.format}
      allowEmptyFormatting
      mask="_"
      onValueChange={(values: any) => {
        const { value } = values;
        props.onChange(value);
      }}
      {...register("date", {
        required: true,
        minLength: {
          value: 2,
          message: "*Минимум 2 символа",
        },
      })}
    />
  );
}
