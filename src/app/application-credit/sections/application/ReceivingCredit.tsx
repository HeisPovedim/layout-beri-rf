import GeneralInformation from "./steps/general-information/GeneralInformation";
import ConfirmationPhone from "./steps/confirmation-phone/ConfirmationPhone";

import style from "./ReceivingCredit.module.scss";

export default function ReceivingCredit(): JSX.Element {
  return (
    <div className={style["receiving-credit"]}>
      <h1 className={style["receiving-credit__title"]}>
        Заявка на получение кредита
      </h1>
      <div className={style["receiving-credit__container"]}>
        <h2 className={style["receiving-credit__contact"]}>
          Контактная информация
        </h2>
        {/* <GeneralInformation /> */}
        <ConfirmationPhone />
      </div>
    </div>
  );
}
