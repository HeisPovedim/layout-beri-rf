"use client";
import React, { useState } from "react";

const Slider: React.FC = () => {
  const [value, setValue] = useState(1000);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(event.target.value, 10));
  };

  return (
    <div className="slider">
      <input
        type="range"
        min="1000"
        max="100000"
        step="1000"
        value={value}
        onChange={handleChange}
        className="w-full"
      />
      {/* <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full bg-white px-2 py-1 rounded-md text-sm shadow">
        {value}
      </span> */}
    </div>
  );
};

export default Slider;
