import { Dispatch, SetStateAction } from 'react';

import { MapIndicatorModal } from '../';
import { POI } from '../LogicController';

import styles from './styles.module.css';

interface Props {
  selected: boolean;
  setSelectedPOI: Dispatch<SetStateAction<string | undefined>>;
  poi: POI;
  primaryColor: string;
  secondaryColor: string;
}

const MapIndicator = ({ selected, setSelectedPOI, poi, primaryColor, secondaryColor }: Props) => {
  const {
    slug,
    name,
    'indicator-image-map': { url, alt },
  } = poi;

  return (
    <span
      onClick={() => setSelectedPOI(slug)}
      className={[styles.mapIndicator, selected ? styles.selected : null].join(' ')}
    >
      <h2>{name}</h2>
      <img className={styles.indicatorImage} src={url} alt={alt ? alt : undefined} />
      <MapIndicatorModal {...{ selected, poi, primaryColor, secondaryColor }} />
    </span>
  );
};

export default MapIndicator;
