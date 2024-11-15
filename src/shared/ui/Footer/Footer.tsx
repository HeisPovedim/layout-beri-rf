import Image from "next/image";

import NavMenu from "@components/nav-menu/nav-menu";

import style from "./Footer.module.scss";
import logo from "@assets/logo.svg";

export default function Footer(): JSX.Element {
  return (
    <div className={style.footer}>
      <div className={style.footer__menu}>
        <Image src={logo} alt="Logo" />
        <NavMenu />
      </div>
      <div className={style.footer__description}>
        <p>
          Фин5 Полное наименование: Общество с ограниченной ответственностью
          Микрокредитная компания "Финфокс7". Сокращенное наименование: ООО МКК
          "Финфокс7" ИНН 6311196269 ОГРН 1236300017579 Регистрационный номер
          записи в государственном реестре микрофинансовых организаций
          2303336009990. Дата внесения 2024-01-29.Включено в реестр (является
          членом) саморегулируемой организации Союз микрофинансовых организаций
          «Альянс» 01.04.20 года № 1991. Адрес ООО МКК "Финфокс7": 443093, г.
          Самара, УЛ. Мориса Тореза, д. 1А, офис 504 ЕРЦК Полное наименование:
          Общество с ограниченной ответственностью «Микрокредитная компания
          «Бламмо Мани». Сокращенное наименование: ООО «МКК «Бламмо Мани» ИНН
          5610243719 ОГРН 1215600012572. Регистрационный номер записи в
          государственном реестре микрофинансовых организаций 2203353009923.
          Дата внесения 20.09.2022 г.. Адрес ООО МКК "Бламмо Мани": 443080,
          Самарская область, г Самара, Революционная ул, д. 70, ком. 5<br />
          <br />
        </p>
        <p>
          Финфокс Полное наименование: Общество с ограниченной ответственностью
          Микрокредитная компания "Финфокс7". Сокращенное наименование: ООО МКК
          "Финфокс7" ИНН 6311196269 ОГРН 1236300017579. Регистрационный номер
          записи в государственном реестре микрофинансовых организаций
          2303336009990. Дата внесения 2024-01-29. Включено в реестр (является
          членом) саморегулируемой организации Союз микрофинансовых организаций
          «Альянс» 01.04.20 года № 1991. Адрес ООО МКК "Финфокс7": 443093, г.
          Самара, УЛ. Мориса Тореза, д. 1А, офис 504 Наркасса Полное
          наименование: Общество с ограниченной ответственностью МИКРОКРЕДИТНАЯ
          КОМПАНИЯ "МАНИ ТРИ". Сокращенное наименование: ООО МКК "МАНИ ТРИ" ИНН
          6318072015 ОГРН 1236300018460. Регистрационный номер записи в
          государственном реестре микрофинансовых организаций 2003336009529.
          Дата внесения 2020-02-20. Адрес ООО МКК "МАНИ ТРИ": 443058, Самарская
          область, г.Самара, ул.Победы, д.86, пом. 2
        </p>
      </div>
    </div>
  );
}
