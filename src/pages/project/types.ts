import { ReactNode } from "react";

export interface IProjectPage {
  tabs: IProjectTab[];
}

export interface IProjectTab {
  name: string;
  children?: ReactNode;
}
