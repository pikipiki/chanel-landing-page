import { useEffect, useRef, useState } from 'react';
import './ParallaxImage.scss';

interface ParallaxImageProps {
  src: string;
  parallaxSpeed: number; // Speed of parallax effect (0 to 1)
  ariaLabel: string;
  parallaxThreshold?: number; // threshold for intersection observer
}

function ParallaxImage({
  src,
  parallaxSpeed,
  ariaLabel,
  parallaxThreshold = 0.1,
}: ParallaxImageProps): JSX.Element {
  const [offsetY, setOffsetY] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isIntersecting = useRef<boolean>(false);

  useEffect(() => {
    const updatePosition = () => {
      if (containerRef.current) {
        const rectTop = containerRef.current.getBoundingClientRect().top;
        // Only apply parallax if the element is not intersecting with the top
        if (isIntersecting.current && rectTop > 0) {
          const newOffsetY = -rectTop * parallaxSpeed;
          setOffsetY(newOffsetY);
        } else {
          setOffsetY(0);
        }
      }
    };

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: parallaxThreshold,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        isIntersecting.current = entry.isIntersecting;
      });
    }, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    window.addEventListener('scroll', updatePosition);

    return () => {
      const { current: containerRefCurrent } = containerRef;
      if (containerRefCurrent) {
        observer.unobserve(containerRefCurrent);
      }
      window.removeEventListener('scroll', updatePosition);
    };
  }, [parallaxSpeed, parallaxThreshold]);

  return (
    <div
      ref={containerRef}
      className="parallax-image__container"
      aria-label={ariaLabel}
    >
      <img
        className="parallax-image__picture"
        src={src}
        alt={ariaLabel}
        style={{ transform: `translateY(${offsetY}px)` }}
      />
    </div>
  );
}

export default ParallaxImage;
