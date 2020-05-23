import React, { FC, Fragment } from "react";

import { IProps } from "./types";

import "./button.css";

const Button: FC<IProps> = ({ className, ...restProps }) => (
  <Fragment>
    <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap"
      rel="stylesheet"
    />
    <button type="button" className={`button ${className}`} {...restProps} />
  </Fragment>
);

export default Button;
