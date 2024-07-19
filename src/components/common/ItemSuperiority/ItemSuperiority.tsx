import Image from "next/image";

//# STYLES
import style from "./ItemSuperiority.module.scss";

type TItemSuperiority = {
  img: HTMLImageElement;
  description: (string | JSX.Element)[];
};

export default function ItemSuperiority(props: TItemSuperiority) {
  return (
    <div className={style.advantages__item}>
      <Image src={props.img} alt="Item" />
      <span>{props.description}</span>
    </div>
  );
}
