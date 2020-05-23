import React, { FC } from "react";

import { IProps } from "./types";

import "./button.css";

const Button: FC<IProps> = ({ className = "", ...restProps }) => (
  <button type="button" className={`button ${className}`} {...restProps} />
);

export default Button;
