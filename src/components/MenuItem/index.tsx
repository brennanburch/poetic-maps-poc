import { Dispatch, SetStateAction } from 'react';
import styles from './styles.module.css';

interface Props {
  name: string;
  indicatorImageSider: {
    url: string;
    alt: string | null;
  };
  selected: boolean;
  setSelectedPOI: Dispatch<SetStateAction<string | undefined>>;
  slug: string;
  address: string | null;
}

const MenuItem = ({
  name,
  indicatorImageSider: { url, alt },
  selected,
  setSelectedPOI,
  slug,
}: Props) => {
  const clickHandler = () => {
    setSelectedPOI(slug);
  };

  return (
    <li
      className={[styles.menuItem, selected ? styles.selected : null].join(' ')}
      onClick={clickHandler}
    >
      <img src={url} alt={alt ? alt : undefined} />
      <span>
        <em>{name}</em>
      </span>
    </li>
  );
};

export default MenuItem;
