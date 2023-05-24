import { Dispatch, SetStateAction } from 'react';
import Dropdown from '../Dropdown';
import type { MapData } from '../LogicController';
import { MenuItem } from '../';
import styles from './styles.module.css';

interface Props {
  mapData: MapData;
  selectedPOI: string | undefined;
  setSelectedPOI: Dispatch<SetStateAction<string | undefined>>;
}
const Menu = ({ mapData, selectedPOI, setSelectedPOI }: Props) => {
  const categories: Array<string> = [];
  mapData.poi.forEach(({ category }) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    if (!categories.includes(category)) categories.push(category);
  });

  const { css, 'primary-color': primaryColor, 'secondary-color': secondaryColor } = mapData;

  return (
    <>
      {css ? <style>{css}</style> : null}

      <ul className={styles.menu}>
        {categories.map((category) => {
          return (
            <Dropdown key={category} category={category}>
              {mapData.poi
                .filter(({ category: poiCategory }) => poiCategory === category)
                .map(({ name, slug, 'indicator-image-sider': indicatorImageSider, address }) => {
                  return (
                    <MenuItem
                      key={slug}
                      {...{
                        name,
                        indicatorImageSider,
                        selected: selectedPOI === slug ? true : false,
                        setSelectedPOI,
                        slug,
                        address,
                      }}
                    />
                  );
                })}
            </Dropdown>
          );
        })}
      </ul>
    </>
  );
};

export default Menu;
