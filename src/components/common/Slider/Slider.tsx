"use client";
import React, { useEffect, useRef, useState } from "react";

import noUiSlider, { API } from "nouislider";

import style from "./Slider.module.scss";

interface HTMLDivElementWithSlider extends HTMLDivElement {
  noUiSlider?: API;
}

type TCSlider = {
  min: number;
  max: number;
  step: number;
  start: number;
  descriptors: string;
  tooltip: boolean;
  onChange: (values: number[]) => void;
};

export default function CSlider(props: TCSlider) {
  const [value, setValue] = useState<number | number[]>();
  const sliderRef = useRef<HTMLDivElementWithSlider>(null);

  useEffect(() => {
    const slider = sliderRef.current;

    if (slider) {
      if (slider.noUiSlider) {
        slider.noUiSlider.destroy();
      }

      const sliderObject = {
        start: [props.start],
        range: {
          min: props.min,
          max: props.max,
        },
        step: props.step,
        connect: [true, false],
      };

      if (props.tooltip) {
        noUiSlider.create(slider, {
          ...sliderObject,
          tooltips: {
            to: function (value) {
              return (
                Math.floor(value).toLocaleString("ru-RU") +
                ` ${props.descriptors}`
              );
            },
          },
        });
      } else {
        noUiSlider.create(slider, { ...sliderObject });
      }

      slider.noUiSlider?.on("update", (values: (number | string)[]) => {
        const value = values.map((value) => parseFloat(value as string));
        setValue(value);
        props.onChange(value);
      });

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
}
