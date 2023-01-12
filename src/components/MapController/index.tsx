import { MapIndicator } from '../';

import styles from './styles.module.css';

const MapController = () => {
  return (
    <div className={styles.mapController}>
      <h1>Map</h1>
      <MapIndicator />
    </div>
  );
};

export default MapController;
