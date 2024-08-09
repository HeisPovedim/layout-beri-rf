import {
  useForm,
  Controller,
  Control,
  FieldValues,
  FieldErrors,
} from "react-hook-form";

import { getErrorMessage } from "@utilities/getErrorMessage";
import { RegForApartmentNumber } from "@helpers/reg-set";

import style from "./form-inputs.module.scss";

export interface IFormInputEmail {
  control: Control<FieldValues, any>;
  value: string;
  type: string;
  placeholder: string;
  onChange: (event: string) => void;
  error: FieldErrors;
}
export default function FormInputEmail(props: IFormInputEmail): JSX.Element {
  const {} = useForm({ mode: "all", shouldUnregister: true });
  const errorMessage = getErrorMessage(props.error, props.type);

  return (
    <div className={style.formInput}>
      <Controller
        name={props.type}
        control={props.control}
        rules={{
          required: "*Необходимо заполнить поле",
          pattern: {
            value: RegForApartmentNumber,
            message: "*Неправильный формат",
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
