import Image from "next/image";

//# STYLES
import style from "./CreditRating.module.scss";

import indicator from "@assets/img/indicator.svg";

export default function CreditRating(): JSX.Element {
  return (
    <div className={style.creditRating}>
      <div className={style.creditRating__description}>
        <h1>
          Узнайте кредитный
          <br />
          рейтинг <span>Бесплатно!</span>
        </h1>
        <p>
          Расскажем, как построить положительную
          <br />
          финансовую репутацию, определить
          <br />
          недостатки в вашей кредитной истории
          <br />и решить их
        </p>
        <button className="custom-button-orange">Узнать свой рейтинг</button>
      </div>
      <div className={style.cardCredits__indicator}>
        <Image src={indicator} alt="Indicator" />
      </div>
    </div>
  );
}
