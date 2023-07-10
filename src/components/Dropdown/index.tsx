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
    <div className={[styles.dropdownHorizontal, 'dropdown-wrapper', className].join(' ')}>
      <div
        className={[styles.dropdownHeader, 'dropdown-header'].join(' ')}
        onClick={handleToggle}
        style={{ borderBottomColor: secondaryColor }}
      >
        <label className="dropdown-header-text">{category}</label>
        <div className={[styles.showHide, 'show-hide-wrapper'].join(' ')}>
          <span className={[styles.showHideContent, 'show-hide-contents'].join(' ')}>
            {!toggle ? 'Show' : 'Hide'}{' '}
            <FaChevronRight
              className="show-hide-icon"
              style={{
                transform: `rotateZ(${toggle ? '90deg' : '0deg'})`,
                transition: 'all 200ms',
                marginLeft: '0.5em',
              }}
            />
          </span>
        </div>
      </div>
      <div
        className={[
          styles.expandableSection,
          toggle ? styles.active : null,
          'dropdown-content-wrapper',
        ].join(' ')}
      >
        <ul className={[styles.items, 'dropdown-content-list'].join(' ')}>{children}</ul>
      </div>
    </div>
  );
};

export default Dropdown;
