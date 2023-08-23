import React from "react";
import { TCircleClipPathProps } from "./types";

const CircleClipPath: React.FC<TCircleClipPathProps> = ({
  topClassName,
  rightClassName,
  bgClassName,
  heightClassName,
  widthClassName,
}) => {
  return (
    <div
      className={`${bgClassName} absolute ${topClassName} ${rightClassName} ${heightClassName} ${widthClassName} rounded-full`}
    />
  );
};

export default CircleClipPath;
