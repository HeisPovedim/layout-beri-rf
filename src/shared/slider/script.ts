import { Dispatch, SetStateAction } from "react";

// p.s: Вычисление процента заполнения слайдера
export const updateSliderFill = (e: any) => {
  let target = e.target;

  if (e.target.type !== "range") {
    target = document.getElementById("range");
  }

  const min = target.min;
  const max = target.max;
  const val = target.value;
  let percentage = ((val - min) * 100) / (max - min);

  target.style.backgroundSize = percentage + "% 100%";
};

// p.s: Вычисление позиции tooltip в зависимости от значения слайдера
export const updateTooltipPosition = (
  value: number,
  sliderRef: React.RefObject<HTMLElement>,
  tooltipRef: React.RefObject<HTMLDivElement>,
  min: number,
  max: number,
  setTooltipPosition: Dispatch<SetStateAction<number>>
) => {
  if (sliderRef.current && tooltipRef.current) {
    const percent = (value - min) / (max - min);
    const thumbWidth = 30;
    const sliderWidth = sliderRef.current.offsetWidth - thumbWidth;
    const leftOffset = -15;
    setTooltipPosition(percent * sliderWidth - leftOffset);
  }
};

