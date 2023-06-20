import { RingLoader } from 'react-spinners';

import styles from './styles.module.css';

const LoadingSpinner = () => {
  return (
    <div id="loading-wrapper" className={styles.loadingWrapper}>
      <RingLoader id="loading-indicator" color="rgba(0, 0, 0, 0.5)" size={200} />
    </div>
  );
};

export default LoadingSpinner;
