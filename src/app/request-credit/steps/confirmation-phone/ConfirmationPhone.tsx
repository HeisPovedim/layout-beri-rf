"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { getStoredData } from "@/utilities/localStorage";

// HELPERS
import { formatPhoneNumber } from "@helpers/format-phone-number";

// LOCAL_STORAGE
import { StorageKeys } from "@config/local-storage/localStorageKeys";

// INTERFACES
import { IDataForm } from "@interfaces/IGeneralInformation";

// COMPONENTS
import FormInputNumberFormat from "@/components/form-inputs/form-input-number-format";

// UI
import ChangeCurrentPhone from "@shared/ui/ModalWindow/content/change-current-phone/change-current-phone";
import Button from "@shared/ui/Button/Button";

// STYLES && IMG
import style from "./ConfirmationPhone.module.scss";
import ImgCover from "./img/cover.png";
import { format } from "path";

export default function ConfirmationPhone(): JSX.Element {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });

  const [code, setCode] = useState<number | null>(null);
  const [isOpenModalWindow, setIsOpenModalWindow] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    const generalInfo = getStoredData(StorageKeys.GENERAL_INFO) as IDataForm;
    if (generalInfo?.numberPhone) {
      setPhoneNumber(generalInfo.numberPhone.toString());
    }
  }, []);

  const onSubmit = (data: any, type: string) => {
    if (type === "changeCurrentPhone") {
      console.log("Yes");
      console.log(data);
      setIsOpenModalWindow(false);
    }
  };
  return (
    <div className={style["confirmation-phone"]}>
      <h2 className={style["confirmation-phone_title"]}>
        Чтобы мы смогли прислать смс с решением от банка
      </h2>
      <div className={style["confirmation-phone__sections-wrapper"]}>
        <section className={style["confirmation-phone__valid-code"]}>
          <div className={style["valid-code__current-phone"]}>
            <p className={style["valid-code__current-phone_phone"]}>
              {formatPhoneNumber(phoneNumber)}
            </p>
            <Button
              customClassName={style["valid-code__current-phone_btn"]}
              variant="blue-underline"
              type="button"
              text="Изменить"
              onClick={() => setIsOpenModalWindow(true)}
            />
            <ChangeCurrentPhone
              isOpen={isOpenModalWindow}
              isClose={() => setIsOpenModalWindow(false)}
              onChangeCurrentPhone={(value) => setPhoneNumber(value)}
            />
          </div>
          <form className={style["valid-code__approval"]}>
            <FormInputNumberFormat
              control={control}
              value={null}
              type="code"
              placeholder="Код подтверждения"
              format="####"
              mask=" "
              minLength={4}
              error={errors}
              errorMessage="*Заполните полностью поле"
              onChange={(val) => setCode(val)}
            />
            <Button
              customClassName={`${style["valid-code__approval_retry"]}`}
              variant="blue-underline"
              type="button"
              text="Отправить повторно смс с кодом"
            />
            <Button
              customClassName={`${style["valid-code__approval_resume"]}`}
              variant="orange"
              type="submit"
              text="Продолжить"
            />
          </form>
        </section>
        <section className={style["confirmation-phone__cover"]}>
          <Image src={ImgCover} alt="SMS Код" />
        </section>
      </div>
    </div>
  );
}
