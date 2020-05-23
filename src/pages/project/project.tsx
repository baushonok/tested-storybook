import React, { FC } from "react";

import { IProjectPage } from "./types";
import Button from "../../components/button";
import TabsList from "../../components/tabs-list";

import './project.css';

const ProjectPage: FC<IProjectPage> = ({ data = [] }) => {
  return (
    <main className="project">
      <TabsList data={data} />
      <Button className="project__feedback">Send feedback</Button>
    </main>
  );
};

export default ProjectPage;
