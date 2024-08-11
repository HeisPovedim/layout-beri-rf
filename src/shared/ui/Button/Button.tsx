import style from "./Button.module.scss";

interface IButton {
  customClassName?: string;
  variant: "orange" | "blue";
  type: "button" | "submit" | "reset";
  // onClick?: () => void;
  disabled?: boolean;
  text: string;
}

export default function Button(props: IButton):JSX.Element {
  return (
    <button
      className={`${props.customClassName} ${style["button"]} ${style[`button--${props.variant}`]}`}
      type={props.type}
      // onClick={onClick}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  );
}