import { useForm, Controller } from "react-hook-form";

import { getErrorMessage } from "@utilities/getErrorMessage";

import style from "./form-inputs.module.scss";

export interface IFormInputText {
  value: string;
  type: string;
  placeholder: string;
  minLength: number;
  maxLength: number;
  pattern: RegExp;
  patternValid: RegExp;
  onChange: (event: string) => void;
}

export default function FormInputText(props: IFormInputText): JSX.Element {
  const {
    control,
    formState: { errors },
  } = useForm({ mode: "all", shouldUnregister: true }); // settings useFrom

  const errorMessage = getErrorMessage(errors, props.type); // handler errors

  return (
    <div className={style.inputWrap}>
      <Controller
        name={props.type}
        control={control}
        defaultValue={props.value || ""}
        rules={{
          required: "*Необходимо заполнить поле",
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
        }}
        render={({ field: { onChange, onBlur } }) => (
          <input
            value={props.value}
            className="custom-input"
            placeholder={props.placeholder}
            onChange={(value) => {
              onChange(value);
              props.onChange(value.target.value);
            }}
            onBlur={onBlur}
          />
        )}
      />
      <p>{errorMessage && <span>{errorMessage}</span>}</p>
    </div>
  );
}