"use client";
// REACT
import { useState } from "react";
import Image from "next/image";

import Button from "@/shared/ui/Button/Button";

import openImg from "./img/open.png";
import closeImg from "./img/close.png";
import cardImg from "./img/card-tinkoff-black.png";

import style from "./page.module.scss";
import { is } from "date-fns/locale";

const requirements = [
  "Возраст от 18 лет",
  "Гражданство РФ",
  "Регистрация по месту пребывания или по месту жительства и/или фактического",
  "Проживания на территории РФ",
  "Регулярный ежемесячный доход",
  "Наличие мобильного телефона и электронной почты",
  "Отсутствие открытых задолженностей в других банках или МФО",
];

export default function OrderCard() {
  const [isOpenClaim, setIsOpenClaim] = useState(false);
  const [isOpenReceiving, setIsOpenReceiving] = useState(false);
  const [isOpenDocuments, setIsOpenDocuments] = useState(false);
  const [isOpenRepayment, setIsOpenRepayment] = useState(false);

  return (
    <div className={style["container"]}>
      <section className={style["cover"]}>
        <div className={style["cover__image"]}>
          <Image src={cardImg} alt="Карта Tinkoff Black" />
        </div>
        <div className={style["cover__info"]}>
          <h1 className={style["cover__info_title"]}>Карта Tinkoff Black </h1>
          <div className={style["cover__info__items"]}>
            <div className={style["cover__info__item"]}>
              <h2 className={style["cover__info__item_title"]}>до 50 дней</h2>
              <p className={style["cover__info__item_description"]}>
                Без процентов
              </p>
            </div>
            <div className={style["cover__info__item"]}>
              <h2 className={style["cover__info__item_title"]}>100 000 ₽</h2>
              <p className={style["cover__info__item_description"]}>
                Кредитный лимит
              </p>
            </div>
            <div className={style["cover__info__item"]}>
              <h2 className={style["cover__info__item_title"]}>Бесплатно</h2>
              <p className={style["cover__info__item_description"]}>
                Обслуживание
              </p>
            </div>
          </div>
          <Button
            customClassName={style["cover__info__button"]}
            variant={"orange"}
            type="button"
            text="Заказать карту"
          />
        </div>
      </section>
      <section className={style["directory"]}>
        <div className={style["directory__items"]}>
          <div className={style["directory__claim directory__item"]}>
            <div
              className={`${style["directory__claim__title"]} ${style["directory__item__title"]}`}
            >
              <p>Требования</p>
              <button
                type="button"
                onClick={() => setIsOpenClaim(!isOpenClaim)}
              >
                {isOpenClaim ? (
                  <Image src={closeImg} alt="Закрыть" />
                ) : (
                  <Image src={openImg} alt="Открыть" />
                )}
              </button>
            </div>
            {isOpenClaim && (
              <>
                {" "}
                <h2 className={style["directory__claim__description"]}>
                  Вы можете рассчитывать на положительный ответ по кредиту,{" "}
                  <br />
                  сли соответствуете следующим условиям:
                </h2>
                <div className={style["directory__claim__lists"]}>
                  <ul>
                    {requirements.map((requirement, index) => (
                      <li key={index}>{requirement}</li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </div>
          <div
            className={`${style["directory__receiving"]} ${style["directory__item"]}`}
          >
            <div
              className={`${style["directory__receiving__title"]} ${style["directory__item__title"]}`}
            >
              <p>Способы получения</p>
              <button
                type="button"
                onClick={() => setIsOpenReceiving(!isOpenReceiving)}
              >
                {isOpenReceiving ? (
                  <Image src={closeImg} alt="Закрыть" />
                ) : (
                  <Image src={openImg} alt="Открыть" />
                )}
              </button>
            </div>
            {isOpenReceiving && (
              <p>
                Cillum nisi tempor sit ullamco qui. Incididunt voluptate
                adipisicing duis ipsum mollit excepteur eu nulla. Labore cillum
                dolor officia anim deserunt. Laboris amet irure officia qui sint
                ullamco. Duis consectetur deserunt veniam sunt esse est cillum
                aliqua ex fugiat consectetur voluptate. Nulla excepteur eiusmod
                sunt ea labore id esse irure elit consectetur eiusmod est
                tempor. Lorem in nulla exercitation nostrud ea consectetur anim
                est. Excepteur sint nostrud labore qui ipsum non. Magna non in
                consequat aliquip mollit adipisicing qui labore nulla. Id anim
                non qui labore enim aliqua labore in ea est. Labore esse ex
                aliquip qui exercitation sint.
              </p>
            )}
          </div>
          <div
            className={`${style["directory__documents"]} ${style["directory__item"]}`}
          >
            <div
              className={`${style["directory__documents__title"]} ${style["directory__item__title"]}`}
            >
              <p>Документы</p>
              <button
                type="button"
                onClick={() => setIsOpenDocuments(!isOpenDocuments)}
              >
                {isOpenDocuments ? (
                  <Image src={closeImg} alt="Закрыть" />
                ) : (
                  <Image src={openImg} alt="Открыть" />
                )}
              </button>
            </div>
            {isOpenDocuments && (
              <p>
                Cillum nisi tempor sit ullamco qui. Incididunt voluptate
                adipisicing duis ipsum mollit excepteur eu nulla. Labore cillum
                dolor officia anim deserunt. Laboris amet irure officia qui sint
                ullamco. Duis consectetur deserunt veniam sunt esse est cillum
                aliqua ex fugiat consectetur voluptate. Nulla excepteur eiusmod
                sunt ea labore id esse irure elit consectetur eiusmod est
                tempor. Lorem in nulla exercitation nostrud ea consectetur anim
                est. Excepteur sint nostrud labore qui ipsum non. Magna non in
                consequat aliquip mollit adipisicing qui labore nulla. Id anim
                non qui labore enim aliqua labore in ea est. Labore esse ex
                aliquip qui exercitation sint.
              </p>
            )}
          </div>
          <div
            className={`${style["directory__repayment"]} ${style["directory__item"]}`}
          >
            <div
              className={`${style["directory__repayment__title"]} ${style["directory__item__title"]}`}
            >
              <p>Способы погашения</p>
              <button
                type="button"
                onClick={() => setIsOpenRepayment(!isOpenRepayment)}
              >
                {isOpenRepayment ? (
                  <Image src={closeImg} alt="Закрыть" />
                ) : (
                  <Image src={openImg} alt="Открыть" />
                )}
              </button>
            </div>
            {isOpenRepayment && (
              <p>
                Cillum nisi tempor sit ullamco qui. Incididunt voluptate
                adipisicing duis ipsum mollit excepteur eu nulla. Labore cillum
                dolor officia anim deserunt. Laboris amet irure officia qui sint
                ullamco. Duis consectetur deserunt veniam sunt esse est cillum
                aliqua ex fugiat consectetur voluptate. Nulla excepteur eiusmod
                sunt ea labore id esse irure elit consectetur eiusmod est
                tempor. Lorem in nulla exercitation nostrud ea consectetur anim
                est. Excepteur sint nostrud labore qui ipsum non. Magna non in
                consequat aliquip mollit adipisicing qui labore nulla. Id anim
                non qui labore enim aliqua labore in ea est. Labore esse ex
                aliquip qui exercitation sint.
              </p>
            )}
          </div>
        </div>
      </section>
      <section className={style["how-get"]}>
        <h1 className={style["how-get__title"]}>
          Как получить кредитную карту
        </h1>
        <ul className={style["how-get__items"]}>
          <li>
            Заполните заявку на сайте для
            <br /> получения кредитной карты
          </li>
          <li>
            Дождитесь смс-сообщения
            <br /> с решением банка
          </li>
          <li>
            Получите карту в<br /> выбранном офисе банка
          </li>
        </ul>
      </section>
    </div>
  );
}
