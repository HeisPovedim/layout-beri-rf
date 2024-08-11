import Image from "next/image";

import Button from "@/shared/ui/Button/Button";

import style from "./set-loans-items.module.scss";

type TCardCreditItem = {
  logo: HTMLImageElement;
  title: string;
  loanSum: number;
  percent: number;
  periodWith: number;
  periodAbout: number;
  bet: number;
};

export default function SetLoansItems(props: TCardCreditItem): JSX.Element {
  return (
    <div className={style.cardCredit__item}>
      <div className={style.cardCredit__item__title}>
        <Image src={props.logo} alt="Logo" />
        <span>{props.title}</span>
      </div>
      <div className={style.cardCredit__item__info}>
        <ul>
          <li>
            Сумма займа: <span>{props.loanSum} ₽</span>
          </li>
          <li>
            На срок: <span>{props.periodWith}</span> -{" "}
            <span>{props.periodAbout} дней</span>
          </li>
          <li>
            В день: <span>{props.percent}%</span>
          </li>
        </ul>
      </div>
      <div className={style.cardCredit__item__btn}>
        <span>Ставка ГЭСВ от {props.bet}%</span>
        <Button
          customClassName={`${style["valid-code__approval__resume"]}`}
          variant="orange"
          type="button"
          text="Взять деньги"
        />
      </div>
    </div>
  );
}
