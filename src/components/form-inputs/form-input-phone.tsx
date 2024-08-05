import { useForm, Controller } from "react-hook-form";
import { PatternFormat, NumberFormatValues } from "react-number-format";

import { getErrorMessage } from "@utilities/getErrorMessage";

import style from "./form-inputs.module.scss";

export interface IFormInputPhone {
  value: number | null;
  type: string;
  placeholder: string;
  format: string;
  onChange: (event: number | null) => void;
}

export default function FormInputPhone(props: IFormInputPhone): JSX.Element {
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
            value: 11,
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
              onChange(values);
              props.onChange(+values.value ? +values.value : null);
            }}
            onBlur={onBlur}
          />
        )}
      />
      <p>{errorMessage && <span>{errorMessage}</span>}</p>
    </div>
  );
}
