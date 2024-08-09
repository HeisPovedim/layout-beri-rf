import Image from "next/image";

//# STYLES
import style from "./advantage-item.module.scss";

type TAdvantageItem = {
  img: HTMLImageElement;
  description: (string | JSX.Element)[];
};

export default function AdvantageItem(props: TAdvantageItem) {
  return (
    <div className={style.advantages__item}>
      <Image src={props.img} alt="Item" />
      <p>{props.description}</p>
    </div>
  );
}
