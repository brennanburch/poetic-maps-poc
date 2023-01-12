import { useParams } from 'react-router-dom';

import { MapController, Menu } from '../';

import styles from './styles.module.css';

const LogicController = () => {
  const params = useParams();
  console.log(params);

  return (
    <div className={styles.wrapper}>
      <p>
        Params
        <ul>
          {Array.from(Object.keys(params)).map((key) => {
            return <li key={key}>{`${key}: ${params[key] as string}`}</li>;
          })}
        </ul>
      </p>
      <Menu />
      <MapController />
    </div>
  );
};

export default LogicController;
