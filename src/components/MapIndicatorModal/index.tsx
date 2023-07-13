import { Dispatch, SetStateAction } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { Carousel } from 'react-responsive-carousel';
import { POI } from '../LogicController';
import styles from './styles.module.css';

interface Props {
  selected: boolean;
  setSelectedPOI: Dispatch<SetStateAction<string | undefined>>;
  poi: POI;
  primaryColor: string;
  secondaryColor: string;
}

const MapIndicatorModal = ({
  selected,
  setSelectedPOI,
  poi: {
    name,
    description,
    address,
    'modal-images': modalImages,
    'title-link': titleLink,
    'cta-link': ctaLink,
    'cta-text': ctaText,
  },
  primaryColor,
  secondaryColor,
}: Props) => {
  const closeModal = () => {
    setSelectedPOI(undefined);
    console.log('click');
  };
  return (
    <>
      <div
        className={[
          styles.mapIndicatorModal,
          selected ? styles.selected : null,
          'map-indicator-modal',
        ].join(' ')}
      >
        <AiOutlineCloseCircle
          id="map-menu-modal-close"
          className={styles.closeIcon}
          size="30px"
          style={{ backgroundColor: primaryColor, color: secondaryColor }}
          onClick={() => {
            closeModal;
          }}

          // Deselect the selected POI
        />
        {modalImages && modalImages.length > 0 ? (
          <Carousel
            className={[styles.carouselWrapper, 'map-indicator-modal-carousel'].join(' ')}
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
        <div className={[styles.textWrapper, 'map-indicator-modal-text-wrapper'].join(' ')}>
          {titleLink ? (
            <a
              className="map-indicator-modal-title-link"
              href={titleLink}
              target="_blank"
              rel="noreferrer"
            >
              <h3 className={[styles.title, 'map-indicator-modal-title'].join(' ')}>{name}</h3>
            </a>
          ) : (
            <h3 className={[styles.title, 'map-indicator-modal-title'].join(' ')}>{name}</h3>
          )}
          <span className={[styles.address, 'map-indicator-modal-address'].join(' ')}>
            {address}
          </span>
          <p className={[styles.description, 'map-indicator-modal-description'].join(' ')}>
            {description}
          </p>
        </div>
        <div className={[styles.bottomContainer, 'map-indicator-modal-bottom-container'].join(' ')}>
          {ctaLink ? (
            <a
              className="map-indicator-modal-cta-link"
              href={ctaLink}
              target="_blank"
              rel="noreferrer"
            >
              <button
                className={[styles.ctaLink, 'map-indicator-modal-cta-link-button'].join(' ')}
                style={{ backgroundColor: secondaryColor, color: primaryColor }}
              >
                {ctaText ? ctaText : 'Visit Site'}
              </button>
            </a>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default MapIndicatorModal;
