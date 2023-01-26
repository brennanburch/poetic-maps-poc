import { RingLoader } from 'react-spinners';

import styles from './styles.module.css';

const LoadingSpinner = () => {
  return (
    <div className={[styles.wrapper, 'loading-wrapper'].join(' ')}>
      <RingLoader color="rgba(0, 0, 0, 0.5)" size={200} />
    </div>
  );
};

export default LoadingSpinner;
