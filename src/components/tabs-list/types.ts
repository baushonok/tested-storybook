import { ReactNode } from 'react';

export interface ITabsList {
  data: ITab[];
}

export interface ITab {
  className?: string;
  name: string;
  content: ReactNode;
}
