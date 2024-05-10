import imariMobile from '@Assets/imari-mobile.jpg';
import imari from '@Assets/imari.jpg';
import Button from '@Components/designSystem/Button/Button';
import ParallaxImage from '@Components/presentational/ParallaxImage/ParallaxImage';
import { useIntl } from 'react-intl';
import {
  PARALLAX_SPEED_DESKTOP,
  PARALLAX_SPEED_MOBILE,
  PARALLAX_THRESHOLD_DESKTOP,
  PARALLAX_THRESHOLD_MOBILE,
} from 'src/constants/constants';
import './LastSection.scss';

function LastSection(): JSX.Element {
  const { formatMessage } = useIntl();

  return (
    <section className="last-section">
      <div className="last-section__image-container-lg">
        <ParallaxImage
          src={imari}
          ariaLabel={formatMessage({ id: 'lastSection.image_ariaLabel' })}
          parallaxSpeed={PARALLAX_SPEED_DESKTOP}
          parallaxThreshold={PARALLAX_THRESHOLD_DESKTOP}
        />
      </div>
      <div className="last-section__image-container-sm">
        <ParallaxImage
          src={imariMobile}
          ariaLabel={formatMessage({ id: 'lastSection.image_ariaLabel' })}
          parallaxSpeed={PARALLAX_SPEED_MOBILE}
          parallaxThreshold={PARALLAX_THRESHOLD_MOBILE}
        />
      </div>
      <span className="last-section__content">
        <h2 className="last-section__title">
          {formatMessage({ id: 'lastSection.title' })}
        </h2>
        <p className="last-section__description">
          {formatMessage({ id: 'lastSection.description' })}
        </p>
        <Button
          href={formatMessage({ id: 'lastSection.button_href' })}
          className="last-section__button"
        >
          {formatMessage({ id: 'lastSection.button_title' })}
        </Button>
        <p className="last-section__note">
          {formatMessage({ id: 'lastSection.note' })}
        </p>
      </span>
    </section>
  );
}

export default LastSection;
