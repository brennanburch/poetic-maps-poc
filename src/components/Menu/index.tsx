import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BiMenu } from 'react-icons/bi';
import { Dropdown } from '../';
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
    if (!categories.includes(category)) categories.push(category);
  });

  const { 'primary-color': primaryColor, 'secondary-color': secondaryColor } = mapData;

  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const isMobile = innerWidth <= 990;

  const [mobileOpen, setMobileOpen] = useState(false);
  const handleOpenToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleCloseMobile = () => {
    setMobileOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav id="map-menu" className={styles.menu} style={{ backgroundColor: primaryColor }}>
      {isMobile ? (
        mobileOpen ? (
          <AiOutlineCloseCircle
            id="map-menu-mobile-close"
            className={styles.menuIcon}
            size="40px"
            onClick={handleOpenToggle}
          />
        ) : (
          <BiMenu
            id="map-menu-mobile-open"
            className={styles.menuIcon}
            size="40px"
            onClick={handleOpenToggle}
          />
        )
      ) : null}
      {categories.map((category) => {
        return (
          <Dropdown
            className={
              isMobile && mobileOpen
                ? styles.mobileDropdown
                : isMobile && !mobileOpen
                ? styles.mobileDropdownClosed
                : null
            }
            key={category}
            category={category}
            {...{ primaryColor, secondaryColor }}
          >
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
                      handleCloseMobile,
                    }}
                  />
                );
              })}
          </Dropdown>
        );
      })}
    </nav>
  );
};

export default Menu;
