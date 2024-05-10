import Link from '@Components/designSystem/Link/Link';
import { useIntl } from 'react-intl';
import './ImageSlider.scss';

export interface Item {
  src: string;
  imageTitle: string;
  imageDescription: string;
  href: string;
  linkTitle: string;
}

interface ImageSliderProps {
  items: Item[];
  handleKeyDown: (event: React.KeyboardEvent) => void;
  current: number;
  nextSlide: VoidFunction;
  prevSlide: VoidFunction;
}

function ImageSlider({
  items,
  nextSlide,
  handleKeyDown,
  prevSlide,
  current,
}: ImageSliderProps): JSX.Element {
  const { formatMessage } = useIntl();

  return (
    <div
      className="image-slider"
      aria-label={formatMessage({ id: 'imageSlider.root_ariaRoleDescription' })}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-roledescription={formatMessage({
        id: 'imageSlider.container_ariaLabel',
      })}
    >
      <div className="image-slider__container">
        {/* previous image slider button for computer */}
        <button
          onClick={prevSlide}
          className="image-slider__button image-slider__button--left-lg"
          aria-label={formatMessage({
            id: 'imageSlider.buttonRightLg_ariaLabel',
          })}
          tabIndex={-1}
          style={{
            visibility: current > 0 ? 'visible' : 'hidden',
          }}
          aria-disabled={current === 0}
        />

        {/* slider */}
        {items.map(
          ({ src, imageTitle, imageDescription, linkTitle, href }, index) => (
            <figure
              key={src}
              aria-disabled={index !== current}
              className={`image-slider__slide ${index === current ? 'image-slider__slide--active' : ''}`}
            >
              <figcaption className="image-slider__caption">
                <h2 className="image-slider__title">{imageTitle}</h2>
                <p className="image-slider__text">{imageDescription}</p>
                <Link href={href}>{linkTitle}</Link>
              </figcaption>
              <img
                src={src}
                alt={imageTitle}
                className="image-slider__image"
                style={{ display: index === current ? 'block' : 'none' }}
              />
            </figure>
          ),
        )}

        {/* next image slider button for computer */}
        <button
          onClick={nextSlide}
          className="image-slider__button image-slider__button--right-lg"
          aria-label={formatMessage({
            id: 'imageSlider.buttonLeftLg_ariaLabel',
          })}
          tabIndex={-1}
          style={{
            visibility: current < items.length - 1 ? 'visible' : 'hidden',
          }}
          aria-disabled={current >= items.length - 1}
        />
      </div>

      <div className="image-slider__pagination-controls-sm">
        {/* previous image slider button for mobile */}
        <button
          onClick={prevSlide}
          className="image-slider__button image-slider__button--left-sm"
          aria-label={formatMessage({
            id: 'imageSlider.buttonRightSm_ariaLabel',
          })}
          tabIndex={-1}
          style={{
            visibility: current > 0 ? 'visible' : 'hidden',
          }}
          aria-disabled={current === 0}
        />

        {/* pagination */}
        <div
          className="image-slider__pagination"
          role="group"
          aria-label={formatMessage({
            id: 'imageSlider.pagination_ariaLabel',
          })}
        >
          <p className="image-slider__pagination-counter">
            {current + 1} / {items.length}
          </p>
        </div>

        {/* next image slider button for mobile */}
        <button
          onClick={nextSlide}
          className="image-slider__button image-slider__button--right-sm"
          aria-label={formatMessage({
            id: 'imageSlider.buttonRightSm_ariaLabel',
          })}
          tabIndex={-1}
          style={{
            visibility: current < items.length - 1 ? 'visible' : 'hidden',
          }}
          aria-disabled={current >= items.length - 1}
        />
      </div>
    </div>
  );
}

export default ImageSlider;
