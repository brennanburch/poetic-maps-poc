import styles from './styles.module.css';
import { useState } from 'react';

interface Props {
  category: string;
  children: string | JSX.Element | JSX.Element[];
  className: string | null;
}

const Dropdown = ({ category, children, className }: Props) => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    console.log('toggled');
    setToggle(!toggle);
  };

  return (
    <div className={[styles.dropdown, 'dropdown', className].join(' ')}>
      <label onClick={handleToggle}>{category}</label>
      <ul className={[styles.expanded, toggle ? styles.dropdownActive : null].join(' ')}>
        {children}
      </ul>
    </div>
  );
};

export default Dropdown;
