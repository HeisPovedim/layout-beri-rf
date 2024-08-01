// Import Components
import Header from "@/components/Header/Header";
import GetMoney from "./components/get-money/GetMoney";
import SetLoans from "./components/set-loans/SetLoans";
import Advantages from "./components/advantages/Advantages";
import CreditRating from "./components/credit-rating/CreditRating";
import Articles from "./components/articles/Articles";
import Footer from "@/components/Footer/Footer";

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
