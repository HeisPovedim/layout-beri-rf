import style from "./page.module.scss";

import Header from "@/shared/ui/Header/Header";
import Application from "./sections/application/Application";
import Footer from "@/shared/ui/Footer/Footer";

export default function GetLoan(): JSX.Element {
  return (
    <div className={style.container}>
      <Header />
      <Application />
      <Footer />
    </div>
  );
}
