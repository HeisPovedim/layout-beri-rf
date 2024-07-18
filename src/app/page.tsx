//# COMPONENTS
import Header from "@/components/header/header";
import Cover from "@/components/Cover/Cover";
import CardCredits from "@/components/cardCredits/cardCredits";
import Advantages from "@/components/advantages/advantages";

//# STYLISH
import style from "./page.module.scss";

export default function Home():JSX.Element {
  return (
    <>
      <Header />
      <Cover />
      <CardCredits />
      <Advantages />
    </>
  );
}
