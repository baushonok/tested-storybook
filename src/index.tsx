import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";

import App from "./app";

ReactDOM.render(
  <Fragment>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Tested Storybook</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <App />
  </Fragment>,
  document.getElementById("root")
);
