import React, { FC } from "react";

import { IProps } from "./types";

import "./button.css";

const Button: FC<IProps> = ({
  className = "",
  disabled = false,
  onClick,
  ...restProps
}) => {
  const clickHandler = () => {
    if (disabled || typeof onClick === "undefined") {
      return;
    }

    onClick();
  };

  return (
    <button
      type="button"
      className={`button ${className}`}
      disabled={disabled}
      {...restProps}
      onClick={clickHandler}
    />
  );
};

export default Button;
