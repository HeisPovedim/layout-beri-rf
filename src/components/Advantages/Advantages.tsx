//# COMPONENTS
import ItemSuperiority from "../common/ItemSuperiority/ItemSuperiority";

//# STYLES
import style from "./Advantages.module.scss";

//# ASSETS
import advantages_item_1 from "@assets/img/advantages-item-1.svg";
import advantages_item_2 from "@assets/img/advantages-item-2.svg";
import advantages_item_3 from "@assets/img/advantages-item-3.svg";
import advantages_item_4 from "@assets/img/advantages-item-4.svg";

export default function Advantages(): JSX.Element {
  return (
    <div className={style.advantages}>
      <h4 className={style.advantages__title}>Преимущество для вас</h4>
      <h2 className={style.advantages__description}>
        Низкие проценты, онлайн оформление<br/>потребительского кредита
      </h2>
      <div className={style.advantages__items}>
        <ItemSuperiority
          img={advantages_item_1}
          description={["Без залога и", <br key="br" />, " на любые цели"]}
        />
        <ItemSuperiority
          img={advantages_item_2}
          description={["Моментальное", <br key="br" />, " рассмотрение заявки"]}
        />
        <ItemSuperiority
          img={advantages_item_3}
          description={["Удобный срок", <br key="br" />, " кредитования"]}
        />
        <ItemSuperiority
          img={advantages_item_4}
          description={["Отсутствие", <br key="br" />, " скрытых комиссий"]}
        />
      </div>
    </div>
  );
}
