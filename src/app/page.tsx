import Header from "@/components/Header/Header";
import CreditSlider from "@/components/CreditSlider/CreditSlider";
import CardCredits from "@/components/CardCredits/CardCredits";
import Advantages from "@/components/Advantages/Advantages";
import CreditRating from "@/components/CreditRating/CreditRating";
import Articles from "@/components/Articles/Articles";
import Footer from "@/components/Footer/Footer";

import style from "./page.module.scss";

export default function Home(): JSX.Element {
  return (
    <>
      <div className={style.container}>
        <Header />
        <CreditSlider />
        <CardCredits />
        <Advantages />
        <CreditRating />
        <Articles />
        <Footer />
      </div>
    </>
  );
}
