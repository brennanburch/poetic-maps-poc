import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { GoogleMap, OverlayViewF, useJsApiLoader } from '@react-google-maps/api';

import { MapData, POI } from '../LogicController';
import { MapIndicator } from '../';
import config from '../../config';
import mapStyles from '../../mapStyles';

import styles from './styles.module.css';

interface Props {
  mapData: MapData;
  selectedPOI: string | undefined;
  setSelectedPOI: Dispatch<SetStateAction<string | undefined>>;
}

const MapController = ({
  mapData: { poi, lat, lng, 'zoom-level': zoom, 'map-color-style': mapStyle = 'default' },
  selectedPOI,
  setSelectedPOI,
}: Props) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: config.googleMapsApiKey,
  });

  const options = {
    disableDoubleClickZoom: true,
    zoomControl: false,
    streetViewControl: false,
    mapTypeControl: false,
    fullscreenControl: false,
    draggable: true,
    styles: [
      {
        featureType: 'administrative',
        elementType: 'geometry',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'poi',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'road',
        elementType: 'labels.icon',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'transit',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      ...mapStyles[mapStyle],
    ],
  };

  const [map, setMap] = useState<google.maps.Map | undefined>();

  const panTo = ({ latitude, longitude }: { latitude: number; longitude: number }) => {
    if (isLoaded && map) {
      map.panTo({ lat: latitude, lng: longitude });
      map.panBy(-100, -100);
    }
  };

  useEffect(() => {
    if (!selectedPOI || !poi) return;
    const { latitude, longitude } = poi.find(({ slug }) => slug === selectedPOI) as POI;
    panTo({ latitude, longitude });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedPOI]);

  if (!isLoaded) return null;

  return (
    <GoogleMap
      mapContainerClassName={styles.mapWrapper}
      clickableIcons={false}
      onLoad={(map) => setMap(map)}
      {...{ options, center: { lat, lng }, zoom }}
    >
      {poi.map(({ slug, latitude, longitude }, index) => {
        return (
          <span key={slug} onClick={() => panTo({ latitude, longitude })}>
            <OverlayViewF
              mapPaneName={'overlayMouseTarget'}
              position={{ lat: latitude, lng: longitude }}
            >
              <MapIndicator
                {...{
                  selected: selectedPOI === slug,
                  setSelectedPOI,
                  poi: poi[index],
                }}
              />
            </OverlayViewF>
          </span>
        );
      })}
    </GoogleMap>
  );
};

export default MapController;
