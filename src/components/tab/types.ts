import { ReactNode } from "react";

export interface ITab {
  name: string;
  content: ReactNode;
  isOpen?: boolean;
}
