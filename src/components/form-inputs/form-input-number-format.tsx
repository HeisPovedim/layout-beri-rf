import {
  useForm,
  Controller,
  Control,
  FieldValues,
  FieldErrors,
} from "react-hook-form";
import { PatternFormat, NumberFormatValues } from "react-number-format";

import { getErrorMessage } from "@utilities/getErrorMessage";

import style from "./form-inputs.module.scss";

export interface IFormInputPhone {
  control: Control<FieldValues, any>;
  value: number | null;
  type: string;
  placeholder: string;
  format: string;
  onChange: (event: number | null) => void;
  error: FieldErrors;
}

export default function FormInputNumberFormat(
  props: IFormInputPhone
): JSX.Element {
  const {} = useForm({ mode: "all", shouldUnregister: true });
  const errorMessage = getErrorMessage(props.error, props.type);

  return (
    <div className={style.formInput}>
      <Controller
        name={props.type}
        control={props.control}
        defaultValue={props.value || null}
        rules={{
          required: "*Необходимо заполнить поле",
          minLength: {
            value: 10,
            message: "*Заполните полностью номер телефона",
          },
        }}
        render={({ field: { onChange, onBlur } }) => (
          <PatternFormat
            className="custom-input"
            name={props.type}
            value={props.value}
            format={props.format}
            placeholder={props.placeholder}
            mask={"_"}
            onValueChange={(values: NumberFormatValues) => {
              onChange(values.value);
              props.onChange(+values.value ? +values.value : null);
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
