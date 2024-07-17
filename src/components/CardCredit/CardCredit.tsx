import Image from "next/image";

//# STYLISH
import style from "./CardCredit.module.scss";

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

export default function CardCredit(props: TCardCredit) {
  return (
    <div className={style.cardCredit}>
      <div className={style.cardCredit__top}>
        <Image src={props.logo} alt="Logo" />
        <span>{props.title}</span>
      </div>
      <div className={style.cardCredit__middle}>
        <ul>
          <li>Сумма займа: {props.loanSum} ₽</li>
          <li>
            На срок: {props.periodWith} - {props.periodAbout} дней
          </li>
          <li>В день: {props.percent}%</li>
        </ul>
      </div>
      <div className={style.cardCredit__lower}>
        <span>Ставка ГЭСВ от {props.bet}%</span>
        <button>Взять деньги</button>
      </div>
    </div>
  );
}
