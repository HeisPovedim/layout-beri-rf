import style from "./Button.module.scss";

interface IButton {
  customClassName?: string;
  variant: "orange" | "blue" | "blue-underline";
  type: "button" | "submit" | "reset";
  disabled?: boolean;
  text: string;
  onClick?: () => void;
}

export default function Button(props: IButton):JSX.Element {
  return (
    <button
      className={`${props.customClassName} ${style["button"]} ${style[`button--${props.variant}`]}`}
      type={props.type}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}