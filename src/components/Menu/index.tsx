import { MenuItem } from '../';

import styles from './styles.module.css';

const Menu = () => {
  return (
    <div className={styles.menu}>
      <h1>Menu</h1>
      <MenuItem />
    </div>
  );
};

export default Menu;
