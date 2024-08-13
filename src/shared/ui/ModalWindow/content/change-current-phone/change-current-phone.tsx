// LIBRARIES
import { useForm } from "react-hook-form";

// LOCAL_STORAGE
import { StorageKeys } from "@config/local-storage/localStorageKeys";

// INPUTS
import FormInputNumberFormat from "@/components/form-inputs/form-input-number-format";

// UI
import ModalWindow from "@shared/ui/ModalWindow/ModalWindow";
import Button from "@shared/ui/Button/Button";

// STYLES
import style from "./change-current-phone.module.scss";

interface IChangeCurrentPhone {
  isOpen: boolean;
  onChangeCurrentPhone: (value: any) => void;
  isClose: () => void;
  onSubmit?: (data: any, type: string) => void;
}

export default function ChangeCurrentPhone(
  props: IChangeCurrentPhone
): JSX.Element {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });

  const onSubmit = (data: any) => {
    props.onChangeCurrentPhone(data.numberPhone);

    const currentData = JSON.parse(
      localStorage.getItem(StorageKeys.GENERAL_INFO) || "{}"
    );
    currentData.numberPhone = data.numberPhone;
    localStorage.setItem(StorageKeys.GENERAL_INFO, JSON.stringify(currentData));

    props.isClose();
  };

  return (
    <ModalWindow isOpen={props.isOpen} isClose={props.isClose}>
      <div className={style["modalWindow__changeCurrentPhone"]}>
        <form
          className={style["modalWindow__changeCurrentPhone_form"]}
          action=""
          onSubmit={handleSubmit(onSubmit)}
        >
          {" "}
          <FormInputNumberFormat
            customClassName={style["modalWindow__changeCurrentPhone_input"]}
            control={control}
            value={null}
            type="numberPhone"
            placeholder="Мобильный телефон"
            format="+7 (###) ###-##-##"
            mask="_"
            minLength={10}
            error={errors}
            errorMessage="*Заполните полностью номер телефона"
            onChange={() => {}}
          />
          <Button
            customClassName={`${style["modalWindow__changeCurrentPhone_btn"]}`}
            variant="orange"
            type="submit"
            text="Изменить"
          />
        </form>
      </div>
    </ModalWindow>
  );
}
