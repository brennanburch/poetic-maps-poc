import { Dispatch, SetStateAction } from 'react';

import styles from './styles.module.css';

interface Props {
  name: string;
  indicatorImageSider: {
    url: string;
    alt: string | null;
  };
  selected: boolean;
  setSelectedPOI: Dispatch<SetStateAction<string | undefined>>;
  slug: string;
  address: string | null;
  handleCloseMobile: () => void;
}

const MenuItem = ({
  name,
  indicatorImageSider: { url, alt },
  selected,
  setSelectedPOI,
  slug,
  handleCloseMobile,
}: Props) => {
  const clickHandler = () => {
    setSelectedPOI(slug);
    handleCloseMobile();
  };

  return (
    <li
      className={[styles.menuItem, selected ? styles.selected : null, 'map-menu-item'].join(' ')}
      onClick={clickHandler}
    >
      <img className="map-menu-item-image" src={url} alt={alt ? alt : undefined} />
      <span className="map-menu-item-text-wrapper">
        <em className="map-menu-item-text">{name}</em>
      </span>
    </li>
  );
};

export default MenuItem;
