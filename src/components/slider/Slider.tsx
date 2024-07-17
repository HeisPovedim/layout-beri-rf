// # CLIENT COMPONENT
"use client";

// # REACT
import React, { useEffect, useRef, useState } from "react";

// # LIBRARY
import noUiSlider, { API } from "nouislider";

// # STYLE
import style from "./Slider.module.scss";
import "../../../assets/custom-slider.scss";

interface HTMLDivElementWithSlider extends HTMLDivElement {
  noUiSlider?: API;
}

// ^ COMPONENT VISION SLIDER
const CSlider: React.FC = () => {
  const [value, setValue] = useState<number | number[]>();
  const sliderRef = useRef<HTMLDivElementWithSlider>(null);

  useEffect(() => {
    const slider = sliderRef.current;

    if (slider) {
      if (slider.noUiSlider) {
        slider.noUiSlider.destroy();
      }

      noUiSlider.create(slider, {
        start: [1000],
        range: {
          min: 1000,
          max: 100000,
        },
        step: 1000,
        tooltips: {
          to: function (value) {
            return Math.floor(value).toLocaleString('ru-RU') + " ₽";
          },
        },
        connect: [true, false],
      });

      slider.noUiSlider?.on(
        "update",
        (values: (number | string)[], handle: number) => {
          setValue(values.map((value) => parseFloat(value as string)));
        }
      );

      return () => {
        if (slider.noUiSlider) {
          slider.noUiSlider.destroy();
        }
      };
    } else {
      console.error("Slider element not found");
    }
  }, []);

  return <div className={style.slider} ref={sliderRef}></div>;
};

export default CSlider;
