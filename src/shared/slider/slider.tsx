import { useState, useEffect, useRef, ChangeEvent } from "react";

import { updateSliderFill, updateTooltipPosition } from "./script";

import style from "./slider.module.scss";

interface TCSlider {
  min: number;
  max: number;
  step: number;
  start: number;
  symbolTooltip: string;
  description: string[];
  styles: {
    colorSlider: string;
    colorThumb: string;
    colorThumbOpacity: string;
  };
  onChange: (values: number) => void;
}

export default function CSlider(props: TCSlider): JSX.Element {
  const [sliderValue, setSliderValue] = useState<number>(props.start);
  const [tooltipPosition, setTooltipPosition] = useState<number>(0);
  const [isTooltipVisible, setIsTooltipVisible] = useState<boolean>(false);

  const sliderRef = useRef<HTMLInputElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  // p.s: Плавное появление tooltip и вычисление его позиции в зависимости от значения слайдера
  useEffect(() => {
    updateTooltipPosition(
      props.start || sliderValue,
      sliderRef,
      tooltipRef,
      props.min,
      props.max,
      setTooltipPosition
    );
    setTimeout(() => setIsTooltipVisible(true), 50);
  }, []);

  const handleOnChange = (value: ChangeEvent<HTMLInputElement>) => {
    const numVal = +value.target.value;

    props.onChange(numVal);
    setSliderValue(numVal);
    updateSliderFill(value);
    updateTooltipPosition(
      numVal,
      sliderRef,
      tooltipRef,
      props.min,
      props.max,
      setTooltipPosition
    );
  };

  return (
    <div
      className={style.wrap}
      style={
        {
          "--slider-color": props.styles.colorSlider,
          "--thumb-color": props.styles.colorThumb,
          "--thumb-opacity-color": props.styles.colorThumbOpacity,
        } as React.CSSProperties
      }
    >
      {props.symbolTooltip && (
        <span
          ref={tooltipRef}
          className={style.tooltip}
          style={{
            left: `${tooltipPosition}px`,
            opacity: isTooltipVisible ? 1 : 0,
          }}
        >
          {new Intl.NumberFormat("fr-FR").format(sliderValue)}{" "}
          {props.symbolTooltip}
        </span>
      )}
      <div className={style.slider}>
        <input
          ref={sliderRef}
          defaultValue={sliderValue}
          type="range"
          min={props.min}
          max={props.max}
          step={props.step}
          onChange={(val) => handleOnChange(val)}
          style={
            {
              backgroundSize: `${(sliderValue / props.max) * 100}% 100%`
            } as React.CSSProperties
          }
        />
        {props.description && (
          <div className={style["slider__extremum"]}>
            <p>{props.description[0]}</p>
            <p>{props.description[1]}</p>
          </div>
        )}
      </div>
    </div>
  );
}
