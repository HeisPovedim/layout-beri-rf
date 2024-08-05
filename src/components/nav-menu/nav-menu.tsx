import Link from "next/link";

export default function NavMenu(): JSX.Element {
  return (
    <ul>
      <li>
        <Link href={"/about"}>О нас</Link>
      </li>
      <li>
        <Link href={"/loan-credit"}>Подбор кредита</Link>
      </li>
      <li>
        <Link href={"/news"}>Новость</Link>
      </li>
      <li>
        <Link href={"/contact"}>Контакты</Link>
      </li>
    </ul>
  );
}
