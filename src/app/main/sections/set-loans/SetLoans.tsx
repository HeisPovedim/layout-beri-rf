//# COMPONENTS
import SetLoansItems from "./set-loans-items/set-loans-items";

//# STYLES
import style from "./SetLoans.module.scss";

//# ASSETS
import item_1 from "./img/card-credit-1.svg";
import item_2 from "./img/card-credit-2.svg";
import item_3 from "./img/card-credit-3.svg";

export default function SetLoans(): JSX.Element {
  return (
    <div className={style.setLoans}>
      <h1 className={style.setLoans_title}>Лучшая подборка кредитов</h1>
      <div className={style.setLoans_items}>
        <SetLoansItems
          logo={item_1}
          title="Займер"
          loanSum={30000}
          percent={0}
          periodWith={7}
          periodAbout={30}
          bet={35}
        />
        <SetLoansItems
          logo={item_2}
          title="Moneyman.ru"
          loanSum={30000}
          percent={0}
          periodWith={7}
          periodAbout={30}
          bet={35}
        />
        <SetLoansItems
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
