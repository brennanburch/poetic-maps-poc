import { Dispatch, SetStateAction } from 'react';

import type { MapData } from '../LogicController';
import { MenuItem } from '../';
import styles from './styles.module.css';

interface Props {
  mapData: MapData;
  selectedPOI: string | undefined;
  setSelectedPOI: Dispatch<SetStateAction<string | undefined>>;
}

const Menu = ({ mapData, selectedPOI, setSelectedPOI }: Props) => {
  return (
    <div className={styles.menu}>
      <ul>
        {mapData.poi.map(
          ({ name, slug, 'indicator-image-sider': indicatorImageSider, address }) => {
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
          },
        )}
      </ul>
    </div>
  );
};

export default Menu;
