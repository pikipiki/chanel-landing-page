import slider1 from '@Assets/slider-1.jpg';
import slider2 from '@Assets/slider-2.jpg';
import Button from '@Components/designSystem/Button/Button';
import ImageSlider, {
  Item,
} from '@Components/presentational/ImageSlider/ImageSlider';
import { useMemo, useState } from 'react';
import { useIntl } from 'react-intl';
import './SliderSection.scss';

function SliderSection(): JSX.Element {
  const { formatMessage } = useIntl();
  const [current, setCurrent] = useState<number>(0);

  const items: Item[] = useMemo(
    () => [
      {
        imageTitle: formatMessage({ id: 'sliderSection.itemOne_imageTitle' }),
        src: slider1,
        imageDescription: formatMessage({
          id: 'sliderSection.itemOne_imageDescription',
        }),
        href: formatMessage({
          id: 'sliderSection.itemOne_href',
        }),
        linkTitle: formatMessage({
          id: 'sliderSection.itemOne_linkTitle',
        }),
      },
      {
        imageTitle: formatMessage({
          id: 'sliderSection.itemTwo_imageTitle',
        }),
        src: slider2,
        imageDescription: formatMessage({
          id: 'sliderSection.itemTwo_imageDescription',
        }),
        href: formatMessage({
          id: 'sliderSection.itemTwo_href',
        }),
        linkTitle: formatMessage({
          id: 'sliderSection.itemTwo_linkTitle',
        }),
      },
    ],
    [formatMessage],
  );

  const nextSlide = () =>
    setCurrent(current === items.length - 1 ? 0 : current + 1);

  const prevSlide = () =>
    setCurrent(current === 0 ? items.length - 1 : current - 1);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    // Check if the event target is the container itself and not a child
    if (event.target === event.currentTarget) {
      if (event.key === 'ArrowRight') {
        nextSlide();
      } else if (event.key === 'ArrowLeft') {
        prevSlide();
      }
    }
  };

  return (
    <section className="slider-section">
      <article className="slider-section__content">
        <div className="slider-section__main-content">
          <ImageSlider
            items={items}
            handleKeyDown={handleKeyDown}
            current={current}
            nextSlide={nextSlide}
            prevSlide={prevSlide}
          />
        </div>
      </article>
      <Button href={formatMessage({ id: 'sliderSection.button_href' })}>
        {formatMessage({ id: 'sliderSection.button_title' })}
      </Button>
    </section>
  );
}

export default SliderSection;
