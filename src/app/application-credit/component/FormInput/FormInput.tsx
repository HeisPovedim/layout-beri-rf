// React
import { useForm, Controller } from "react-hook-form";
import { Input } from "@nextui-org/react";

// Library
import { PatternFormat, NumberFormatValues } from "react-number-format";

// Interface
import { IFormInput, IFormInputNumberDate } from "../interface";

// Styles
import style from "./FormInput.module.scss";

export function FormInput(props: IFormInput): JSX.Element {
  const {
    control,
    formState: { errors },
  } = useForm({ mode: "all", shouldUnregister: true });

  const errorMessage = errors[props.type]?.message as string;

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
            onChange={(event) => {
              onChange(event);
              props.onChange(event.target.value);
            }}
            onBlur={onBlur}
          />
        )}
      />
      <p>{errorMessage && <span>{errorMessage}</span>}</p>
    </div>
  );
}

export function FormInputNumberDate(props: IFormInputNumberDate): JSX.Element {
  const {
    control,
    formState: { errors },
  } = useForm({ mode: "all", shouldUnregister: true });

  const validateDate = (value: string) => {
    if (value.length !== 8) return "*Некорректный формат даты";

    const day = parseInt(value.slice(0, 2), 10);
    const month = parseInt(value.slice(2, 4), 10);
    const year = parseInt(value.slice(4), 10);

    if (month < 1 || month > 12) return "*Некорректный месяц";
    if (year < 1900 || year > 9999) return "*Некорректный год";

    const daysInMonth = (month: number, year: number) => {
      return new Date(year, month, 0).getDate();
    };

    if (day < 1 || day > daysInMonth(month, year)) return "*Некорректный день";

    return true;
  };

  const errorMessage = errors[props.type]?.message as string;

  return (
    <div className={style.inputWrap}>
      <Controller
        name={props.type}
        control={control}
        defaultValue={props.value || null}
        rules={{
          required: "*Необходимо заполнить поле",
          validate: validateDate,
        }}
        render={({ field: { onChange, onBlur } }) => (
          <PatternFormat
            className="custom-input"
            name={props.type}
            value={props.value}
            format={props.format}
            mask={"_"}
            onValueChange={(values: NumberFormatValues) => {
              const { value } = values;
              onChange(value);
              props.onChange(value);
              console.log(typeof value);
            }}
            onBlur={onBlur}
            customInput={Input}
            allowEmptyFormatting
          />
        )}
      />
      <p>{errorMessage && <span>{errorMessage}</span>}</p>
    </div>
  );
}
