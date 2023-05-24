import type { MapData } from '../LogicController';
import styles from './styles.module.css';

import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const Dropdown = ({ category, children }) => {
  const [toggle, setToggle] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment

  return (
    <>
      <div className={styles.dropdown}>
        <button onClick={() => setToggle(!toggle)} className={styles.dropdown}>
          <label>{category}</label>

          {toggle && <ul className={styles.expanded}>{children}</ul>}
        </button>
      </div>
    </>
  );
};

export default Dropdown;
