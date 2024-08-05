import style from "./page.module.scss";

import Header from "@/shared/ui/Header/Header";
import Application from "./container/application/Application";

export default function GetLoan(): JSX.Element {
  return (
    <div className={style.container}>
      <Header />
      <Application />
    </div>
  );
}
