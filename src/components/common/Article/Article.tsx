import Image, { StaticImageData } from "next/image";

import style from "./Article.module.scss";

type TArticle = {
  img: StaticImageData;
  title: string;
  description: string;
};

export default function Article(props: TArticle): JSX.Element {
  return (
    <div className={style.articles__box__article}>
      <div className={style.articles__box__article__images}>
        <Image src={props.img} alt="Img article not found"/>
      </div>
      <div className={style.articles__box__article__info}>
        <h2>{props.title}</h2>
        <span>{props.description}</span>
      </div>
    </div>
  );
}
