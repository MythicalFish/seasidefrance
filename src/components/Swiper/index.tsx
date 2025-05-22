import { useCallback, useRef, useState, useEffect } from 'react';
import clsx from 'clsx';
import { Swiper, SwiperSlide, type SwiperRef } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { screens } from '../../../tailwind-constants.mjs';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import styles from './styles.module.css';

type Props = {
  children: React.ReactNode[];
  title?: string;
  perSlide?: number;
  fullHeight?: boolean;
  paginator?: boolean;
  navPosition?: 'inside' | 'outside' | 'none';
  autoplay?: boolean;
};

const SwiperSection: React.FC<Props> = ({
  title,
  children,
  perSlide = 3,
  fullHeight = false,
  navPosition = 'none',
  paginator = true,
  autoplay = false,
}) => {
  const breakpointValues = Object.values(screens).map((bp) => parseInt(bp));

  const sliderRef = useRef<SwiperRef>(null);
  const autoplayDelay = 10000;
  const [progress, setProgress] = useState(0);
  const [resetTimer, setResetTimer] = useState(false);

  const resetProgress = useCallback(() => {
    setProgress(0);
    setResetTimer((prev) => !prev);
  }, []);

  const handlePrev = useCallback(() => {
    sliderRef.current?.swiper?.slidePrev();
    resetProgress();
  }, [resetProgress]);

  const handleNext = useCallback(() => {
    sliderRef.current?.swiper?.slideNext();
    resetProgress();
  }, [resetProgress]);
  let breakpoints = {
    [breakpointValues[0]]: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    [breakpointValues[1]]: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    [breakpointValues[2]]: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  };

  if (perSlide === 1)
    breakpoints = {
      [0]: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      [1]: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      [2]: {
        slidesPerView: 1,
        spaceBetween: 24,
      },
      [breakpointValues[1]]: { slidesPerView: 1, spaceBetween: 16 },
    };
  if (perSlide === 3) {
    breakpoints[breakpointValues[3]] = {
      slidesPerView: 3,
      spaceBetween: 32,
    };
  }

  useEffect(() => {
    const swiperInstance = sliderRef.current?.swiper;
    if (!swiperInstance) return;

    const handleSlideChange = () => {
      resetProgress();
    };

    swiperInstance.on('slideChange', handleSlideChange);

    return () => {
      swiperInstance.off('slideChange', handleSlideChange);
    };
  }, [resetProgress]);

  useEffect(() => {
    if (!autoplay) return;

    let startTime = Date.now();
    let interval = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      const progressValue = (elapsedTime / autoplayDelay) * 100;
      setProgress(progressValue > 100 ? 100 : progressValue);

      if (progressValue >= 100) {
        resetProgress();
        sliderRef.current?.swiper?.slideNext();
        startTime = Date.now();
      }
    }, 100);

    return () => clearInterval(interval);
  }, [autoplay, resetTimer]);

  return (
    <div className={fullHeight ? 'h-full' : ''}>
      {!!title && <h3 className="h0 mt-24 mb-8 md:mb-16">{title}</h3>}
      <div className="relative">
        <Swiper
          className={clsx(styles.swiper, fullHeight ? 'h-full' : '')}
          loop
          ref={sliderRef}
          modules={[Pagination, Autoplay]}
          slidesPerView={perSlide}
          pagination={paginator ? { clickable: true } : false}
          breakpoints={breakpoints}
          autoplay={autoplay ? { delay: autoplayDelay, disableOnInteraction: false } : false}
        >
          {children.map((node, index) => (
            <SwiperSlide key={index}>{node}</SwiperSlide>
          ))}
          {navPosition === 'inside' && (
            <nav className={clsx(styles.nav, styles.navInside, 'hidden md:block ml-2')}>
              <button onClick={handlePrev} />
              <button onClick={handleNext} />
            </nav>
          )}
        </Swiper>
        {autoplay && (
          <div className="absolute bottom-[50px] left-0 w-full h-2 ">
            <div className="h-full bg-blue-600 " style={{ width: `${progress}%` }} />
          </div>
        )}
      </div>

      {navPosition === 'outside' && (
        <nav className={clsx(styles.nav, 'hidden md:block ml-2')}>
          <button onClick={handlePrev} />
          <button onClick={handleNext} />
        </nav>
      )}
    </div>
  );
};

export default SwiperSection;
