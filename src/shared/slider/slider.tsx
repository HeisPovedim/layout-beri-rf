import { useState } from "react";
import Slider from "rc-slider";

import "rc-slider/assets/index.css";
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap.css";

type TCSlider = {
  min: number;
  max: number;
  step: number;
  start: number;
  descriptors: string;
  tooltip: boolean;
  // onChange: (values: number) => void;
};

type TSliderParams = {
  // !не забыть подгрузить типизацию
  min: number;
  max: number;
  step: number;
  onChange: (val: number) => void;
};

const text = <span>tooltip</span>;

const SliderTooltip = (props: any) => {
  return (
    <Tooltip placement="top" overlay={<span>tooltip</span>}>
      <span>ИДИ на хуй!</span>
    </Tooltip>
  );
};

export default function CSlider(props: TCSlider): JSX.Element {
  const [value, setValue] = useState<number | number[]>();

  const params: any = {
    min: props.min,
    max: props.max,
    step: props.step,
    // onChange: props.onChange,
    handleRender: () => <SliderTooltip />,
  };

  return <Slider {...params} dotStyle={{ borderColor: 'red' }} activeDotStyle={{ borderColor: 'blue' }} />;
}
