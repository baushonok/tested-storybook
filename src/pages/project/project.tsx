import React, { FC } from "react";

import { IProjectPage } from "./types";
import TabsList from "../../components/tabs-list";

const ProjectPage: FC<IProjectPage> = ({ data = [] }) => {
  return <main>{<TabsList data={data} />}</main>;
};

export default ProjectPage;
