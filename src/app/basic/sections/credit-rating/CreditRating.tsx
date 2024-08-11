import Image from "next/image";

import Button from "@shared/ui/Button/Button";

import style from "./CreditRating.module.scss";

import indicator from "@assets/img/indicator.svg";

export default function CreditRating(): JSX.Element {
  return (
    <div className={style["creditRating"]}>
      <div className={style["creditRating__find"]}>
        <h1 className={style["creditRating__find_title"]}>
          Узнайте кредитный
          <br />
          рейтинг <span>Бесплатно!</span>
        </h1>
        <p className={style["creditRating__find_description"]}>
          Расскажем, как построить положительную
          <br />
          финансовую репутацию, определить
          <br />
          недостатки в вашей кредитной истории
          <br />и решить их
        </p>
        <Button
          customClassName={style["creditRating__find_btn"]}
          variant="orange"
          type="submit"
          text="Узнать свой рейтинг"
        />
      </div>
      <div className={style.creditRating_indicator}>
        <Image src={indicator} alt="Indicator" />
      </div>
    </div>
  );
}
