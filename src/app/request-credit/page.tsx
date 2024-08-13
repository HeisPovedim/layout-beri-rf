"use client";
// REACT
import { useState } from "react";

// STEPS
import GeneralInformation from "./steps/general-information/GeneralInformation";
import ConfirmationPhone from "./steps/confirmation-phone/ConfirmationPhone";

import style from "./page.module.scss";

export default function RequestCredit(): JSX.Element {
  const [step, setStep] = useState(0);
  return (
    <div className={style["container"]}>
      {" "}
      <div className={style["receiving-credit"]}>
        <h1 className={style["receiving-credit__title"]}>
          Заявка на получение кредита
        </h1>
        <div className={style["receiving-credit__container"]}>
          <h2 className={style["receiving-credit__contact"]}>
            Контактная информация
          </h2>
          {step === 0 && <GeneralInformation nextStep={() => setStep(1)} />}
          {step === 1 && <ConfirmationPhone />}
        </div>
      </div>
    </div>
  );
}
