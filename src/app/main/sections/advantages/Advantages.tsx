import AdvantageItem from "./advantage-item/advantage-item";

import style from "./Advantages.module.scss";

import item_1 from "./img/advantages-item-1.svg";
import item_2 from "./img/advantages-item-2.svg";
import item_3 from "./img/advantages-item-3.svg";
import item_4 from "./img/advantages-item-4.svg";

export default function Advantages(): JSX.Element {
  return (
    <div className={style.advantages}>
      <h4 className={style.advantages_title}>Преимущество для вас</h4>
      <h2 className={style.advantages_description}>
        Низкие проценты, онлайн оформление<br/>потребительского кредита
      </h2>
      <div className={style.advantages_items}>
        <AdvantageItem
          img={item_1}
          description={["Без залога и", <br key="br" />, " на любые цели"]}
        />
        <AdvantageItem
          img={item_2}
          description={["Моментальное", <br key="br" />, " рассмотрение заявки"]}
        />
        <AdvantageItem
          img={item_3}
          description={["Удобный срок", <br key="br" />, " кредитования"]}
        />
        <AdvantageItem
          img={item_4}
          description={["Отсутствие", <br key="br" />, " скрытых комиссий"]}
        />
      </div>
    </div>
  );
}
