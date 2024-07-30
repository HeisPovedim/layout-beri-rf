import style from "./page.module.scss";

import Header from "@components/Header/Header";
import Application from "./component/application/Application"

export default function GetLoan(): JSX.Element {
  return (
    <div className={style.container}>
      <Header />
      <Application />
    </div>
  );
}
