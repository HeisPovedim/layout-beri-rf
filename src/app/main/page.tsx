import Header from "@/shared/ui/Header/Header";
import GetMoney from "./sections/get-money/GetMoney";
import SetLoans from "./sections/set-loans/SetLoans";
import Advantages from "./sections/advantages/Advantages";
import CreditRating from "./sections/credit-rating/CreditRating";
import Articles from "./sections/articles/Articles";
import Footer from "@/shared/ui/Footer/Footer";

import style from "./page.module.scss";

export default function Home(): JSX.Element {
  return (
    <div className={style.container}>
      <Header />
      <GetMoney />
      <SetLoans />
      <Advantages />
      <CreditRating />
      <Articles />
      <Footer />
    </div>
  );
}
