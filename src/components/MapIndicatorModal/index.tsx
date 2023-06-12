import { Carousel } from 'react-responsive-carousel';
import { POI } from '../LogicController';

import styles from './styles.module.css';

interface Props {
  selected: boolean;
  poi: POI;
}

const MapIndicatorModal = ({
  selected,
  poi: {
    name,
    description,
    address,
    'modal-images': modalImages,
    'title-link': titleLink,
    'cta-link': ctaLink,
    'cta-text': ctaText,
  },
}: Props) => {
  console.log('modal-images', modalImages);
  return (
    <div className={[styles.mapIndicatorModal, selected ? styles.selected : null].join(' ')}>
      {modalImages && modalImages.length > 0 ? (
        <Carousel
          className={styles.carouselWrapper}
          showIndicators={false}
          infiniteLoop={true}
          showStatus={false}
          showArrows={true}
          showThumbs={false}
        >
          {modalImages.map(({ url, alt }, index) => {
            return (
              <div className={styles.carouselImageWrapper} key={`carousel-image-${index}`}>
                <img src={url} alt={alt ? alt : undefined} />
              </div>
            );
          })}
        </Carousel>
      ) : null}
      <div className={styles.textWrapper}>
        {titleLink ? (
          <a href={titleLink} target="_blank" rel="noreferrer">
            <h3 className={styles.title}>{name}</h3>
          </a>
        ) : (
          <h3 className={styles.title}>{name}</h3>
        )}
        <span className={styles.address}>{address}</span>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.bottomContainer}>
        {ctaLink ? (
          <a href={ctaLink} target="_blank" rel="noreferrer">
            <button>{ctaText ? ctaText : 'Visit Site'}</button>
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default MapIndicatorModal;
