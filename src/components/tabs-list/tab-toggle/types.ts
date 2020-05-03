export interface ITabName {
  name: string;
  index: number;
  isActive?: boolean;
  onClick: (index: number) => void;
}
