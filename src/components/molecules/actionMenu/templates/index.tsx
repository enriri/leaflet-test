import { StartPoint } from './startPoint';
import { IntrestPoint } from './intrestPoint';
import { AreaPoint } from './areaPoint';

export interface ActionMenuGlobalInterface {
  id?: string;
  data?: any;
  callback: (globalActionMenuProps: GlobalActionMenuProps) => void;
}

export type GlobalActionMenuProps = {
  startPointProps?: StartPointProps;
  intrestPointProps?: IntrestPointProps;
  areaPointProps?: AreaPointProps;
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

export type AreaPointCoordProps = {
  lat_sup: number;
  lat_inf: number;
  long_sup: number;
  long_inf: number;
};

export type AreaPointProps = {
  id?: string;
  coords: AreaPointCoordProps;
  desc: string;
};

export const ActionMenuTemplates = {
  startPoint: StartPoint,
  intrestPoint: IntrestPoint,
  areaPoint: AreaPoint,
};
