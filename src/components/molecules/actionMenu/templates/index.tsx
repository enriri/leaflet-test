import { StartPoint } from './startPoint';
import { IntrestPoint } from './intrestPoint';

export interface ActionMenuGlobalInterface {
  id?: string;
  data?: any;
  callback: (globalActionMenuProps: GlobalActionMenuProps) => void;
}

export type GlobalActionMenuProps = {
  startPointProps?: StartPointProps;
  intrestPointProps?: IntrestPointProps;
};

export type StartPointProps = {
  id?: string;
  lat: number;
  long: number;
  zoom: number;
};

export type IntrestPointProps = {
  id?: string;
  lat: number;
  long: number;
  desc: string;
};

export const ActionMenuTemplates = {
  startPoint: StartPoint,
  intrestPoint: IntrestPoint,
};
