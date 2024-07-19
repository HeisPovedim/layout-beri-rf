import Article from "../common/Article/Article";

import style from "./Articles.module.scss";

import articles_1 from "@assets/img/articles-1.png";
import articles_2 from "@assets/img/articles-2.png";
import articles_3 from "@assets/img/articles-3.png";

export default function Articles(): JSX.Element {
  return (
    <div className={style.articles}>
      <h1>Последние статьи</h1>
      <div className={style.articles__box}>
        <Article
          img={articles_1}
          title="Название статьи"
          description="Краткое описание данной статьи"
        />
        <Article
          img={articles_2}
          title="Название статьи"
          description="Краткое описание данной статьи"
        />
        <Article
          img={articles_3}
          title="Название статьи"
          description="Краткое описание данной статьи"
        />
        <Article
          img={articles_2}
          title="Название статьи"
          description="Краткое описание данной статьи"
        />
      </div>
    </div>
  );
}
