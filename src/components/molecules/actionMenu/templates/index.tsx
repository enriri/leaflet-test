import { StartPoint } from './startPoint';
import { IntrestPoint } from './intrestPoint';
import { AreaPoint } from './areaPoint';
import { PerimeterPoint } from './perimeterPoint';

export interface ActionMenuGlobalInterface {
  id?: string;
  data?: any;
  callback: (globalActionMenuProps: GlobalActionMenuProps) => void;
}

export type GlobalActionMenuProps = {
  startPointProps?: StartPointProps;
  intrestPointProps?: IntrestPointProps;
  areaPointProps?: AreaPointProps;
  perimeterPointProps?: PerimeterPointProps;
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
  lat_sup: string;
  lat_inf: string;
  long_sup: string;
  long_inf: string;
};

export type AreaPointProps = {
  id?: string;
  coords: AreaPointCoordProps;
  desc: string;
};

export type PerimeterPointProps = {
  id?: string;
  lat: string;
  long: string;
  radius: string;
  desc: string;
};

export const ActionMenuTemplates = {
  startPoint: StartPoint,
  intrestPoint: IntrestPoint,
  areaPoint: AreaPoint,
  perimeterPoint: PerimeterPoint,
};
