import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { GoogleMap, OverlayViewF, useJsApiLoader } from '@react-google-maps/api';
import { MapIndicator } from '../';

import { MapData, POI } from '../LogicController';
import config from '../../config';

import styles from './styles.module.css';

interface Props {
  mapData: MapData;
  selectedPOI: string | undefined;
  setSelectedPOI: Dispatch<SetStateAction<string | undefined>>;
}

const MapController = ({
  mapData: { poi, center, 'zoom-level': zoom },
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
    ],
  };

  const [map, setMap] = useState<google.maps.Map | undefined>();

  const panTo = ({ lat, lng }: { lat: number; lng: number }) => {
    if (isLoaded && map) {
      map.panTo({ lat, lng });
      map.panBy(0, -250);
    }
  };

  useEffect(() => {
    if (!selectedPOI || !poi) return;
    const { lat, lng } = poi.find(({ slug }) => slug === selectedPOI) as POI;
    panTo({ lat, lng });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedPOI]);

  if (!isLoaded) return null;

  return (
    <GoogleMap
      mapContainerClassName={styles.mapWrapper}
      clickableIcons={false}
      onLoad={(map) => setMap(map)}
      {...{ options, center, zoom }}
    >
      {/* render map of indicators */}
      {poi.map(({ slug, lat, lng }, index) => {
        return (
          <span key={slug} onClick={() => panTo({ lat, lng })}>
            <OverlayViewF mapPaneName={'overlayMouseTarget'} position={{ lat, lng }}>
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
