//# COMPONENTS
import Header from "@/components/Hedaer/Header";
import Cover from "@/components/Cover/Cover";
import CardCredits from "@/components/CardCredits/CardCredits";
import Advantages from "@/components/Advantages/Advantages";
import CreditRating from "@/components/CreditRating/CreditRating";
import Articles from "@/components/Articles/Articles";
import Footer from "@/components/Footer/Footer";

//# STYLISH
import style from "./page.module.scss";

export default function Home(): JSX.Element {
  return (
    <>
      <div className={style.container}>
        <Header />
        <Cover />
        <CardCredits />
        <Advantages />
        <CreditRating />
        <Articles />
        <Footer />
      </div>
    </>
  );
}
