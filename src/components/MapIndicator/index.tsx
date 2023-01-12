import { MapIndicatorModal } from '../';

import styles from './styles.module.css';

const MapIndicator = () => {
  return (
    <div className={styles.mapIndicator}>
      <h2>Map Indicator</h2>
      <MapIndicatorModal />
    </div>
  );
};

export default MapIndicator;
