import Image, { StaticImageData } from "next/image";

import style from "./article-item.module.scss";

type TArticleItem = {
  img: StaticImageData;
  title: string;
  description: string;
};

export default function ArticleItem(props: TArticleItem): JSX.Element {
  return (
    <div className={style["articles__item"]}>
      <div className={style["articles__item__image"]}>
        <Image src={props.img} alt="Img article not found" />
      </div>
      <div className={style["articles__item__info"]}>
        <h2 className={style["articles__item__info_title"]}>{props.title}</h2>
        <p className={style["articles__item__info_description"]}>
          {props.description}
        </p>
      </div>
    </div>
  );
}
