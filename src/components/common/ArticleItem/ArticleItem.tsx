import Image, { StaticImageData } from "next/image";

import style from "./ArticleItem.module.scss";

type TArticleItem = {
  img: StaticImageData;
  title: string;
  description: string;
};

export default function ArticleItem(props: TArticleItem): JSX.Element {
  return (
    <div className={style.articles__item}>
      <div className={style.articles__item__image}>
        <Image src={props.img} alt="Img article not found"/>
      </div>
      <div className={style.articles__item__info}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
