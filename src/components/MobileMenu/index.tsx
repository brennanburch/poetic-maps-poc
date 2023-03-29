import { Dispatch, SetStateAction, useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/Ai';
import { BiMenu } from 'react-icons/bi';

import type { MapData } from '../LogicController';
import { MenuItem } from '..';
import styles from './styles.module.css';

interface Props {
  mapData: MapData;
  selectedPOI: string | undefined;
  setSelectedPOI: Dispatch<SetStateAction<string | undefined>>;
}

const MobileMenu = ({ mapData, selectedPOI, setSelectedPOI }: Props) => {
  const [open, setOpen] = useState(false);
  const closeMobileMenu = () => setOpen(false);

  const { css, 'primary-color': primaryColor, 'secondary-color': secondaryColor } = mapData;

  return (
    <>
      {css ? <style>{css}</style> : null}
      <div className={styles.menu}>
        {open ? (
          <AiOutlineCloseCircle size="40px" onClick={() => setOpen(!open)} />
        ) : (
          <BiMenu size="40px" onClick={() => setOpen(!open)} />
        )}

        {open && (
          <div className={styles.listContainer}>
            <button className={styles.button} onClick={closeMobileMenu}>
              <ul style={{ backgroundColor: primaryColor, color: secondaryColor }}>
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
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default MobileMenu;
