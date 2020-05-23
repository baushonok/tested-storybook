import React from "react";
import { Helmet } from "react-helmet";

import { data } from "./mocks/project";
import Project from "./pages/project";

const App = () => (
  <div className="app">
    <Helmet>
      <meta charSet="utf-8" />
      <title>Tested Storybook</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <Project data={data} />
  </div>
);

export default App;
