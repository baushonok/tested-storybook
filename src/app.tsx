import React from "react";

import { data } from "./mocks/project";
import Project from "./pages/project";

const App = () => (
  <div className="app">
    <Project data={data} />
  </div>
);

export default App;
