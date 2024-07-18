//# COMPONENTS
import CardCredit from "../common/CardCredit/CardCredit";

//# STYLES
import style from "./cardCredits.module.scss";

//# ASSETS
import card_credit_first from "@assets/img/card-credit-1.svg";
import card_credit_second from "@assets/img/card-credit-2.svg";
import card_credit_third from "@assets/img/card-credit-3.svg";

export default function CardCredits(): JSX.Element {
  return (
    <div className={style.cardCredits}>
      <span>Лучшая подборка кредитов</span>
      <div className={style.cardCredits__box}>
        <CardCredit
          logo={card_credit_first}
          title="Займер"
          loanSum={30000}
          percent={0}
          periodWith={7}
          periodAbout={30}
          bet={35}
        />
        <CardCredit
          logo={card_credit_second}
          title="Moneyman.ru"
          loanSum={30000}
          percent={0}
          periodWith={7}
          periodAbout={30}
          bet={35}
        />
        <CardCredit
          logo={card_credit_third}
          title="Коке.kz"
          loanSum={30000}
          percent={0}
          periodWith={7}
          periodAbout={30}
          bet={35}
        />
      </div>
    </div>
  );
}
