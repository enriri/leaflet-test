import React from 'react';
import * as S from './style';
import { MenuSectionInterface } from '../../molecules/menuSection';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { ActionMenuContext } from '../../../context/actionMenuContext';
import { itemsInterface } from '../../molecules/menuSection';
import { fetchIntrestPointCRUD } from '../../../hooks';
import { FetchIntrestPointContract } from '../../../hooks/fetchIntrestPoint';
import fetchAreaPointCRUD, {
  FetchAreaPointContract,
} from '../../../hooks/fetchAreaPoint';
import fetchPerimeterPointCRUD, {
  FetchPerimeterContract,
} from '../../../hooks/fetchPerimeter';
import { MapContext } from '../../../context/mapContext';

export const Menu: React.FC = () => {
  const actionMenuContext = React.useContext(ActionMenuContext);
  const { startPoint, intrestPoints, toggleActive, loadPoints } =
    React.useContext(MapContext);
  const { setTemplate } = actionMenuContext;
  const menus_init: MenuSectionInterface[] = [
    {
      items: [{ id: '1', label: 'Ponto e Zoom iniciais', data: {} }],
      onClickMenu: () => setTemplate('startPoint'),
    },
  ];

  const [menus, setMenus] = React.useState<MenuSectionInterface[]>(menus_init);

  //IntrestPoints
  const { GET: fetchIntrestPoints, DELETE: deleteIntrestPoint } =
    fetchIntrestPointCRUD;

  //AreaPoints
  const { GET: fetchAreaPoints, DELETE: deleteAreaPoint } = fetchAreaPointCRUD;

  //PerimeterPoints
  const { GET: fetchPerimeterPoints, DELETE: deletePerimeterPoint } =
    fetchPerimeterPointCRUD;

  // transform into itemsMenu Type
  const adaptToItemInterfaceType = (
    data:
      | FetchIntrestPointContract[]
      | FetchAreaPointContract[]
      | FetchPerimeterContract[]
  ) => {
    const items: itemsInterface[] = [];
    if (data.length > 0) {
      data.map((item: any) => {
        items.push({ id: item.id, label: item.label, data: item });
      });
    }
    return items;
  };

  const loadMenu = () => {
    setMenus([...menus_init]);
    loadPoints && loadPoints();
    const localMenu = [...menus_init];

    fetchIntrestPoints([{}])
      .then((data) => {
        localMenu.push({
          items: adaptToItemInterfaceType(data),
          onClickMenu: ({ id }) => {
            setTemplate('intrestPoint', id);
            id && toggleActive && toggleActive(id, 'intrestPoint');
          },
          deleteoptions: {
            onDelete: ({ id }) => {
              deleteIntrestPoint({ id }).finally(loadMenu);
            },
          },
          createoptions: {
            onCreate: () => setTemplate('intrestPoint'),
          },
          title: 'Pontos',
        });
      })
      .finally(() => {
        fetchAreaPoints([{}])
          .then((data) => {
            localMenu.push({
              items: adaptToItemInterfaceType(data),
              onClickMenu: ({ id }) => setTemplate('areaPoint', id),
              deleteoptions: {
                onDelete: ({ id }) => deleteAreaPoint({ id }).finally(loadMenu),
              },
              createoptions: {
                onCreate: () => setTemplate('areaPoint'),
              },
              title: 'Area',
            });
          })
          .finally(() => {
            fetchPerimeterPoints([{}])
              .then((data) => {
                localMenu.push({
                  items: adaptToItemInterfaceType(data),
                  onClickMenu: ({ id }) => setTemplate('perimeterPoint', id),
                  deleteoptions: {
                    onDelete: ({ id }) =>
                      deletePerimeterPoint({ id }).finally(loadMenu),
                  },
                  createoptions: {
                    onCreate: () => setTemplate('perimeterPoint'),
                  },
                  title: 'Perimetro',
                });
              })
              .finally(() => {
                setMenus(localMenu);
              });
          });
      });
  };

  React.useEffect(() => {
    loadMenu();
  }, []);

  return (
    <S.Container>
      <S.SideMenuWrapper>
        <S.MenuSectionWrapper>
          {menus.map((menu, key) => {
            return <S.StyledMenuSection key={key} {...menu} />;
          })}
        </S.MenuSectionWrapper>
        <S.ActionMapWrapper>
          <S.StyledActionMenu
            onSubmit={() => {
              loadMenu();
              loadPoints && loadPoints();
            }}
          />
          <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: '500px', width: '100%' }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            {startPoint && (
              <>
                <Marker position={[startPoint.lat, startPoint.long]}>
                  <Popup>Ponto inicial</Popup>
                </Marker>
              </>
            )}

            {intrestPoints?.map((point, key) => {
              return (
                <div key={key}>
                  <Marker position={[point.lat, point.long]}>
                    <Popup>{point.desc}</Popup>
                  </Marker>
                </div>
              );
            })}
          </MapContainer>
        </S.ActionMapWrapper>
      </S.SideMenuWrapper>
    </S.Container>
  );
};
