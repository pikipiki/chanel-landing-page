import giedreMobile from '@Assets/giedre-mobile.jpg';
import giedre from '@Assets/giedre.jpg';
import { useIntl } from 'react-intl';
import {
  PARALLAX_SPEED_DESKTOP,
  PARALLAX_SPEED_MOBILE,
  PARALLAX_THRESHOLD_DESKTOP,
  PARALLAX_THRESHOLD_MOBILE,
} from 'src/constants/constants';
import ParallaxImage from '../ParallaxImage/ParallaxImage';
import './MoonSection.scss';

function MoonSection(): JSX.Element {
  const { formatMessage } = useIntl();

  return (
    <section className="moon-section">
      <span className="moon-section__content">
        <h2 className="moon-section__title">
          {formatMessage({ id: 'moonSection.title' })}
        </h2>
        <p className="moon-section__description">
          {formatMessage({ id: 'moonSection.description' })}
        </p>
      </span>
      <div className="moon-section__parallax-wrapper-lg">
        <ParallaxImage
          src={giedre}
          ariaLabel={formatMessage({ id: 'moonSection.image_ariaLabel' })}
          parallaxSpeed={PARALLAX_SPEED_DESKTOP}
          parallaxThreshold={PARALLAX_THRESHOLD_DESKTOP}
        />
      </div>
      <div className="moon-section__parallax-wrapper-sm">
        <ParallaxImage
          src={giedreMobile}
          ariaLabel={formatMessage({ id: 'moonSection.image_ariaLabel' })}
          parallaxSpeed={PARALLAX_SPEED_MOBILE}
          parallaxThreshold={PARALLAX_THRESHOLD_MOBILE}
        />
      </div>
    </section>
  );
}

export default MoonSection;
