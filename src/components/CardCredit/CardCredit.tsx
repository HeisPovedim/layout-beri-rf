import Image from "next/image";

//# STYLISH
import style from "./CardCredit.module.scss";
import "./CardCredit.scss";

type TCardCredit = {
  logo: any;
  title: string;
  loanSum: number;
  percent: number;
  periodWith: number;
  periodAbout: number;
  bet: number;
  className: string;
};

export default function CardCredit(props: TCardCredit): JSX.Element {
  return (
    <div className={`${style.cardCredit} ${props.className}`}>
      <div className={style.cardCredit__title}>
        <Image src={props.logo} alt="Logo" />
        <span>{props.title}</span>
      </div>
      <div className={style.cardCredit__info}>
        <ul>
          <li>Сумма займа: <span>{props.loanSum} ₽</span></li>
          <li>
            На срок: <span>{props.periodWith}</span> - <span>{props.periodAbout} дней</span>
          </li>
          <li>В день: <span>{props.percent}%</span></li>
        </ul>
      </div>
      <div className={style.cardCredit__get}>
        <span>Ставка ГЭСВ от {props.bet}%</span>
        <button className="custom-button-orange">Взять деньги</button>
      </div>
    </div>
  );
}
