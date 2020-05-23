import React, { useState, FC } from "react";

import { IProjectPage } from "./types";
import Button from "../../components/button";
import TabsList from "../../components/tabs-list";

import "./project.css";

const ProjectPage: FC<IProjectPage> = ({ data = [] }) => {
  const [allowedToSendFeedback, setAllowedToSendFeedback] = useState(true);
  const sendFeedback = () => {
    setAllowedToSendFeedback(false);

    setTimeout(() => {
      setAllowedToSendFeedback(true);
    }, 5000);
  };

  return (
    <main className="project">
      <TabsList data={data} />
      <Button
        className="project__feedback"
        disabled={!allowedToSendFeedback}
        onClick={sendFeedback}
      >
        Send feedback
      </Button>
    </main>
  );
};

export default ProjectPage;
