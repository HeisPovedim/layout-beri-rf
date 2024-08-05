import { useForm, Controller } from "react-hook-form";

import { getErrorMessage } from "@utilities/getErrorMessage";
import { RegForApartmentNumber } from "@helpers/reg-set";

import style from "./form-inputs.module.scss";

export interface IFormInputEmail {
  value: string;
  type: string;
  placeholder: string;
  onChange: (event: string) => void;
}
export default function FormInputEmail(props: IFormInputEmail): JSX.Element {
  const {
    control,
    formState: { errors },
  } = useForm({ mode: "all", shouldUnregister: true });

  const errorMessage = getErrorMessage(errors, props.type);

  return (
    <div className={style.inputWrap}>
      <Controller
        name={props.type}
        control={control}
        rules={{
          required: true,
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
      <p>{errorMessage && <span>{errorMessage}</span>}</p>
    </div>
  );
}
