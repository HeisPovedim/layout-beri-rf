import GetMoney from "./sections/get-money/GetMoney";
import SetLoans from "./sections/set-loans/SetLoans";
import Advantages from "./sections/advantages/Advantages";
import CreditRating from "./sections/credit-rating/CreditRating";
import Articles from "./sections/articles/Articles";

import style from "./page.module.scss";

export default function Home(): JSX.Element {
  return (
    <div className={style.container}>
      <GetMoney />
      <SetLoans />
      <Advantages />
      <CreditRating />
      <Articles />
    </div>
  );
}
