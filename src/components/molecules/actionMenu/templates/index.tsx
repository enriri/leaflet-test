import { StartPoint } from './startPoint';

export interface ActionMenuGlobalInterface {
  callback: (globalActionMenuProps: GlobalActionMenuProps) => void;
}

export type GlobalActionMenuProps = {
  startPointProps?: StartPointProps;
};

export type StartPointProps = {
  lat: number;
  long: number;
  zoom: number;
};

export const ActionMenuTemplates = {
  startPoint: StartPoint,
};
