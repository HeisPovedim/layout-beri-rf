import Image from "next/image";

//# COMPONENTS
import Header from "@/components/header/header";
import CardCredit from "@/components/CardCredit/CardCredit";
import BasicSlider from "@/components/basicSlider/basicSlider";

//# STYLISH
import style from "./page.module.scss";

//# ASSETS
import card_credit_1 from "../../assets/card-credit-1.svg";
import card_credit_2 from "../../assets/card-credit-2.svg";
import card_credit_3 from "../../assets/card-credit-3.svg";

export default function Home() {
  return (
    <>
      <Header />
      <BasicSlider />
      <div className={style.cardCredits}>
        <span>Лучшая подборка кредитов</span>
        <div className={style.cardCredits__box}>
          <CardCredit
            logo={card_credit_1}
            title="Займер"
            loanSum={30000}
            percent={0}
            periodWith={7}
            periodAbout={30}
            bet={35}
            className="cardCreditFirst"
          />
          <CardCredit
            logo={card_credit_2}
            title="Moneyman.ru"
            loanSum={30000}
            percent={0}
            periodWith={7}
            periodAbout={30}
            bet={35}
            className="cardCreditSecond"
          />
          <CardCredit
            logo={card_credit_3}
            title="Коке.kz"
            loanSum={30000}
            percent={0}
            periodWith={7}
            periodAbout={30}
            bet={35}
            className="cardCreditThird"
          />
        </div>
      </div>
      <div className=""></div>
    </>
  );
}
