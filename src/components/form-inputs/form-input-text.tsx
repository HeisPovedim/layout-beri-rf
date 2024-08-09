import {
  useForm,
  Controller,
  Control,
  FieldValues,
  FieldErrors,
} from "react-hook-form";

import { getErrorMessage } from "@utilities/getErrorMessage";

import style from "./form-inputs.module.scss";

export interface IFormInputText {
  control: Control<FieldValues, any>;
  value: string;
  type: string;
  placeholder: string;
  minLength: number;
  maxLength: number;
  pattern: RegExp;
  patternValid: RegExp;
  onChange: (event: string) => void;
  error: FieldErrors;
}

export default function FormInputText(props: IFormInputText): JSX.Element {
  const {} = useForm({ mode: "all", shouldUnregister: true });
  const errorMessage = getErrorMessage(props.error, props.type);

  return (
    <div className={style.formInput}>
      <Controller
        name={props.type}
        control={props.control}
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
      <p className={`${style.errorMessage} form-error-message`}>
        {errorMessage && <span>{errorMessage}</span>}
      </p>
    </div>
  );
}
