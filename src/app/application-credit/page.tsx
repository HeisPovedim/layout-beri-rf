import style from "./page.module.scss";

import Application from "./sections/application/ReceivingCredit";

export default function GetLoan(): JSX.Element {
  return (
    <div className={style.container}>
      <Application />
    </div>
  );
}
