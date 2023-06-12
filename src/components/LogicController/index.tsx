import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

import { Error, LoadingSpinner, MapController, Menu } from '../';
import mapsQuery from '../../queries';
import styles from './styles.module.css';

export type MapDataImage = {
  url: string;
  alt: string | null;
};

export type POI = {
  address: string | null;
  description: string | null;
  'indicator-image-map': MapDataImage;
  'indicator-image-sider': MapDataImage;
  'indicator-template': string | null;
  latitude: number;
  longitude: number;
  'modal-images': MapDataImage[];
  name: string;
  slug: string;
  category: string;
  'title-link'?: string | null;
  'cta-text'?: string | null;
  'cta-link'?: string | null;
};

export type MapData = {
  longitude: number;
  latitude: number;
  'custom-css': string | null;
  poi: POI[];
  'primary-color': string;
  'secondary-color': string;
  slug: string;
  'map-color-style': string | undefined;
  name: string;
  'zoom-level': number;
};

const LogicController = () => {
  const { mapsCollectionId, poiCollectionId } = useParams();
  const [selectedPOI, setSelectedPOI] = useState<string | undefined>();

  const { isLoading, isError, data, error } = useQuery(
    ['map', mapsCollectionId, poiCollectionId] as [string, string, string],
    mapsQuery,
  );

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <Error error={error} />;

  const mapData = data.data as MapData;
  const {
    'custom-css': css,
    'primary-color': primaryColor,
    'secondary-color': secondaryColor,
  } = mapData;

  return (
    <>
      {css ? <style>{css}</style> : null}
      <div
        className={styles.wrapper}
        style={{ backgroundColor: primaryColor, color: secondaryColor }}
      >
        <MapController {...{ mapData, selectedPOI, setSelectedPOI }} />
        <Menu {...{ mapData, selectedPOI, setSelectedPOI }} />
      </div>
    </>
  );
};

export default LogicController;
