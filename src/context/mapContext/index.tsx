/* eslint-disable @typescript-eslint/no-empty-function */
import React, { ReactNode } from 'react';
import {
  ActionMenuTemplates,
  AreaPointCoordProps,
  IntrestPointProps,
  PerimeterPointProps,
  StartPointProps,
} from '../../components/molecules/actionMenu/templates';
import { fetchIntrestPointCRUD } from '../../hooks';

type Categories = keyof typeof ActionMenuTemplates;

interface mapContext {
  startPoint?: StartPointProps;
  intrestPoints?: IntrestPointProps[];
  areaPoints?: AreaPointCoordProps[];
  perimeterPoints?: PerimeterPointProps[];
  defineStartPoint?: (data: StartPointProps) => void;
  defineIntrestPoints?: (data: IntrestPointProps[]) => void;
  defineAreaPoints?: (data: AreaPointCoordProps[]) => void;
  definePerimeterPoints?: (data: PerimeterPointProps[]) => void;
  toggleActive?: (id: string, category: Categories) => void;
  loadPoints?: () => void;
}

const DEFAULT_VALUES: mapContext = {};

export const MapContext = React.createContext<mapContext>(DEFAULT_VALUES);

export const MapContextProvider: React.FC<{ children?: ReactNode }> = ({
  children,
}) => {
  const [startPoint, setStartPoint] = React.useState<StartPointProps>();
  const [intrestPoints, setIntrestPoints] =
    React.useState<IntrestPointProps[]>();

  const { GET: loadIntrestPoints } = fetchIntrestPointCRUD;

  const loadPoints = () => {
    const newArr: IntrestPointProps[] = [];
    loadIntrestPoints([{}])
      .then((data) => {
        data.forEach((item) => {
          const { coords, desc, id } = item;
          if (!coords) return;
          newArr.push({
            id,
            lat: coords[0],
            long: coords[1],
            desc: desc || '',
            active: false,
          });
        });
      })
      .finally(() => {
        setIntrestPoints(newArr);
      });
  };

  const defineStartPoint = (data: StartPointProps) => {
    setStartPoint(data);
  };

  const toggleActive = (id: string, category: Categories) => {
    console.log(id, category);
    switch (category) {
      case 'intrestPoint': {
        console.log(intrestPoints);
        if (intrestPoints) {
          const position = intrestPoints.findIndex((item) => {
            if (item.id === id) return true;
          });

          const currentData = intrestPoints[position];

          if (currentData) {
            const { active } = currentData;

            const updatedIntrestPoints = [...intrestPoints];

            updatedIntrestPoints[position] = Object.assign(
              { active: !active },
              currentData
            );

            setIntrestPoints([...updatedIntrestPoints]);
          }
        }
      }
    }
  };

  React.useEffect(() => {
    loadPoints();
  }, []);

  return (
    <MapContext.Provider
      value={{
        startPoint,
        defineStartPoint,
        intrestPoints,
        toggleActive,
        loadPoints,
      }}
    >
      {children}
    </MapContext.Provider>
  );
};
