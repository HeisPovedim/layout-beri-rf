//# IMAGE
import Image from "next/image";

//# STYLES
import style from "./Cover.module.scss";

//# COMPONENTS
import Slider from "@/components/common/Slider/Slider";

//# ASSETS
import quick_loan_human from "@assets/img/quick-loan-human.svg";

export default function Cover(): JSX.Element {
  return (
    <div className={style.infoSlider}>
      <div className={style.boxInfo}>
        <span className={style.boxInfo__title}>
          &nbsp;&nbsp;&nbsp;Деньги
          <br />
          на&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;карту
        </span>
        <Image src={quick_loan_human} alt="quick-loan-human" />
      </div>
      <div className={style.boxSlider}>
        <span className={style.boxSlider__title}>Кредит без залога</span>
        <span className={style.boxSlider__description}>
          Деньги у вас через <span>10:32</span>
        </span>
        <div className={style.boxSlider__slider}>
          <Slider />
          <div className={style.boxSlider__price}>
            <span>1000₽</span>
            <span>100000₽</span>
          </div>
        </div>
        <button className={`${style.boxSlider__button} custom-button-orange`}>
          Взять деньги
        </button>
      </div>
    </div>
  );
}
