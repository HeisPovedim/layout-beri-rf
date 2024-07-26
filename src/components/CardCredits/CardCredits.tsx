//# COMPONENTS
import CardCreditItem from "../common/CardCreditItem/CardCreditItem";

//# STYLES
import style from "./CardCredits.module.scss";

//# ASSETS
import item_1 from "./img/card-credit-1.svg";
import item_2 from "./img/card-credit-2.svg";
import item_3 from "./img/card-credit-3.svg";

export default function CardCredits(): JSX.Element {
  return (
    <div className={style.cardCredits}>
      <h1 className={style.cardCredits__title}>Лучшая подборка кредитов</h1>
      <div className={style.cardCredits__items}>
        <CardCreditItem
          logo={item_1}
          title="Займер"
          loanSum={30000}
          percent={0}
          periodWith={7}
          periodAbout={30}
          bet={35}
        />
        <CardCreditItem
          logo={item_2}
          title="Moneyman.ru"
          loanSum={30000}
          percent={0}
          periodWith={7}
          periodAbout={30}
          bet={35}
        />
        <CardCreditItem
          logo={item_3}
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
