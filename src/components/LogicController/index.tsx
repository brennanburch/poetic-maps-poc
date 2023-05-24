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
  lat: number;
  lng: number;
  'modal-images': MapDataImage[];
  name: string;
  slug: string;
  category: string;
};

export type MapData = {
  center: {
    lng: number;
    lat: number;
  };
  css: string | null;
  font: string;
  'modal-template': string;
  poi: POI[];
  'primary-color': string;
  'secondary-color': string;
  'tertiary-color': string;
  'sider-template': string | null;
  slug: string;
  'style-template': string;
  subtitle: string;
  title: string;
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
  const { css, 'primary-color': primaryColor, 'secondary-color': secondaryColor } = mapData;

  return (
    <>
      {css ? <style>{css}</style> : null}
      <div
        className={styles.wrapper}
        style={{ backgroundColor: primaryColor, color: secondaryColor }}
      >
        <Menu {...{ mapData, selectedPOI, setSelectedPOI }} />
        <MapController {...{ mapData, selectedPOI, setSelectedPOI }} />
      </div>
    </>
  );
};

export default LogicController;
