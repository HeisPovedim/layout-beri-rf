import { useForm, Controller } from "react-hook-form";
import { PatternFormat, NumberFormatValues } from "react-number-format";

import { validateDate } from "@helpers/validateDate";
import { getErrorMessage } from "@utilities/getErrorMessage";

import style from "./form-inputs.module.scss";

export interface IFormInputDate {
  value: number | null;
  type: string;
  placeholder: string;
  format: string;
  onChange: (event: number) => void;
}

export default function FormInputDate(props: IFormInputDate): JSX.Element {
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
      <p>{errorMessage && <span>{errorMessage}</span>}</p>
    </div>
  );
}
