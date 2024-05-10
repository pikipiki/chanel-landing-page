import { useIntl } from 'react-intl';
import './HeroSection.scss';

function HeroSection(): JSX.Element {
  const { formatMessage } = useIntl();
  const title = formatMessage({ id: 'heroSection.title' });

  return (
    <section className="hero-section">
      <div
        className="hero-section__container"
        aria-label={formatMessage({ id: 'heroSection.image_ariaLabel' })}
      >
        <p className="hero-section__title--lg">{title}</p>
      </div>
      <p className="hero-section__title--sm">{title}</p>
    </section>
  );
}

export default HeroSection;
