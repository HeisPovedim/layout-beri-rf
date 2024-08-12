import {
  useForm,
  Controller,
  Control,
  FieldValues,
  FieldErrors,
} from "react-hook-form";
import { PatternFormat, NumberFormatValues } from "react-number-format";

import { validateDate } from "@/helpers/validate-date";
import { getErrorMessage } from "@utilities/getErrorMessage";

import style from "./form-inputs.module.scss";

export interface IFormInputDate {
  control: Control<FieldValues, any>;
  value: number | null;
  type: string;
  placeholder: string;
  format: string;
  onChange: (event: number) => void;
  error: FieldErrors;
}

export default function FormInputDate(props: IFormInputDate): JSX.Element {
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
            value: 8,
            message: "*Некорректный формат даты",
          },
          validate: validateDate,
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
              props.onChange(+values.value);
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
