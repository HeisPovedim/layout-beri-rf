//# COMPONENTS
import Header from "@/components/Header/Header";
import Cover from "@/components/Cover/Cover";
import CardCredits from "@/components/CardCredits/CardCredits";
import Advantages from "@/components/Advantages/Advantages";

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
