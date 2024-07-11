"use client";
import React, { useState, useEffect, useRef } from "react";
import RCSlider from "rc-slider";
import "rc-slider/assets/index.css";
import style from "./Slider.module.scss";

const Slider: React.FC = () => {
  const [value, setValue] = useState<number>(1000);
  const sliderRef = useRef<HTMLDivElement>(null);
  const valueRef = useRef<HTMLSpanElement>(null);

  const handleChange: (newValue: number | number[]) => void = (newValue) => {
    if (Array.isArray(newValue)) {
      setValue(newValue[0]);
    } else {
      setValue(newValue);
    }
  };

  useEffect(() => {
    const updateValuePosition = () => {
      if (sliderRef.current && valueRef.current) {
        const sliderWidth = sliderRef.current.offsetWidth;
        const valueWidth = valueRef.current.offsetWidth;
        const position =
          ((value - 1000) / (100000 - 1000)) * (sliderWidth - valueWidth);

        const maxPosition = sliderWidth - valueWidth;
        const adjustedPosition = Math.min(position, maxPosition);

        valueRef.current.style.left = `${adjustedPosition}px`;
      }
    };

    updateValuePosition(); // Вызываем функцию при монтировании

    window.addEventListener("resize", updateValuePosition);
    return () => window.removeEventListener("resize", updateValuePosition);
  }, [value]); // Добавляем value в зависимости

  return (
    <div className={style.sliderWrapper}>
      <div ref={sliderRef} className={style.sliderTrack}>
        {" "}
        {/* Добавлен ref и класс для трека */}
        <RCSlider
          min={1000}
          max={100000}
          step={500}
          onChange={handleChange}
          value={value}
        />
        <span ref={valueRef} className={style.sliderValue}>
          {value}
        </span>{" "}
        {/* Добавлен ref для значения */}
      </div>
    </div>
  );
};

export default Slider;
