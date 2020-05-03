import React, { FC } from "react";

import { IProjectPage } from "./types";

const ProjectPage: FC<IProjectPage> = ({ tabs = [] }) => {
  return <main>{tabs.map((item) => item.name)}</main>;
};

export default ProjectPage;
