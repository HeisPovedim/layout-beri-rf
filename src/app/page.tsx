import Image from "next/image";

//# COMPONENTS
import Header from "@/components/header/Header";
import Slider from "@/components/Slider/Slider";
import CardCredit from "@/components/CardCredit/CardCredit";

//# STYLISH
import style from "./page.module.scss";

//# ASSETS
import quick_loan_human from "../../assets/quick-loan-human.svg";
import card_credit_1 from "../../assets/card-credit-1.svg";
import card_credit_2 from "../../assets/card-credit-2.svg";
import card_credit_3 from "../../assets/card-credit-3.svg";

export default function Home() {
  return (
    <>
      <Header />
      <div className={style.infoSlider}>
        <div className={style.boxInfo}>
          <span className={style.boxInfo__title}>
            &nbsp;&nbsp;&nbsp;Деньги
            <br />
            на&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;карту
          </span>
          <Image src={quick_loan_human} alt="quick-loan-human" />
        </div>
        <div className={style.boxSlider}>
          <span className={style.boxSlider__title}>Кредит без залога</span>
          <span className={style.boxSlider__description}>
            Деньги у вас через <span>10:32</span>
          </span>
          <div className={style.boxSlider__slider}>
            <Slider />
            <div className={style.boxSlider__price}>
              <span>1000₽</span>
              <span>100000₽</span>
            </div>
          </div>
          <div className={style.boxSlider__button}>Взять деньги</div>
        </div>
      </div>
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
            className={style.cardCredit}
          />
          <CardCredit
            logo={card_credit_2}
            title="Moneyman.ru"
            loanSum={30000}
            percent={0}
            periodWith={7}
            periodAbout={30}
            bet={35}
            className={style.cardCredit}
          />
          <CardCredit
            logo={card_credit_3}
            title="Коке.kz"
            loanSum={30000}
            percent={0}
            periodWith={7}
            periodAbout={30}
            bet={35}
            className={style.cardCredit}
          />
        </div>
      </div>
    </>
  );
}
