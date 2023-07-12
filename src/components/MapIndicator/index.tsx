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
  modalToggle: boolean;
}

const MapIndicator = ({
  selected,
  setSelectedPOI,
  poi,
  primaryColor,
  secondaryColor,
  modalToggle,
}: Props) => {
  const {
    slug,
    name,
    'indicator-image-map': { url, alt },
  } = poi;

  return (
    <span
      onClick={() => setSelectedPOI(slug)}
      className={[
        styles.mapIndicator,
        selected ? styles.selected : null,
        'map-indicator-content',
      ].join(' ')}
    >
      <h2 className="map-indicator-heading">{name}</h2>
      <img
        className={[styles.indicatorImage, 'map-indicator-image'].join(' ')}
        src={url}
        alt={alt ? alt : undefined}
      />
      {modalToggle ? (
        <MapIndicatorModal {...{ selected, setSelectedPOI, poi, primaryColor, secondaryColor }} />
      ) : null}
      ;
    </span>
  );
};

export default MapIndicator;
