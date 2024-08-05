// Import Components
import Header from "@/shared/ui/Header/Header";
import GetMoney from "./container/get-money/GetMoney";
import SetLoans from "./container/set-loans/SetLoans";
import Advantages from "./container/advantages/Advantages";
import CreditRating from "./container/credit-rating/CreditRating";
import Articles from "./container/articles/Articles";
import Footer from "@/shared/ui/Footer/Footer";

// Import Styles
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
