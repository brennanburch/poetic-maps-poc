import { FaChevronRight } from 'react-icons/fa';
import { useState } from 'react';

import styles from './styles.module.css';

interface Props {
  category: string;
  children: string | JSX.Element | JSX.Element[];
  className: string | null;
  primaryColor?: string;
  secondaryColor?: string;
}

const Dropdown = ({
  category,
  children,
  className,
  // primaryColor = '',
  secondaryColor = '',
}: Props) => {
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className={[styles.dropdown, 'dropdown', className].join(' ')}>
      <div
        className={styles.dropdownHeader}
        onClick={handleToggle}
        style={{ borderBottomColor: secondaryColor }}
      >
        <label>{category}</label>
        <div className={styles.showHide}>
          <span>
            {!toggle ? 'Show' : 'Hide'}{' '}
            <FaChevronRight
              style={{
                transform: `rotateZ(${toggle ? '90deg' : '0deg'})`,
                transition: 'all 200ms',
                marginLeft: '0.5em',
              }}
            />
          </span>
        </div>
      </div>
      <ul className={[styles.expanded, toggle ? styles.dropdownActive : null].join(' ')}>
        {children}
      </ul>
    </div>
  );
};

export default Dropdown;
