import React, { useState } from "react";
import { CarouselContainer, Slide, Indicators, Indicator, ArrowLeft, ArrowRight } from "./styles";
import { useFavs } from "../../hooks/useFavs";

export const Carroussel = () => {
  const { data } = useFavs();
  const [centerSlide, setCenterSlide] = useState(0);

  const nextSlide = () => {
    setCenterSlide((slide) => (slide === data.length - 1 ? 0 : slide + 1));
  };

  const prevSlide = () => {
    setCenterSlide((slide) => (slide === 0 ? data.length - 1 : slide - 1));
  };

  if (!data) {
    return <p>Cargando...</p>;
  }

  return (
    <CarouselContainer>
      <ArrowLeft onClick={prevSlide} />
      {data.map((item, idx) => {
        const distanceFromCenter = Math.abs(centerSlide - idx);
        let slideClass = "slide";
        if (distanceFromCenter === 0) {
          slideClass += " slide-center";
        } else if (distanceFromCenter === 1) {
          slideClass += " slide-side";
        } else {
          slideClass += " slide-hidden";
        }
        return (
          <Slide
            src={item.images}
            alt={item.alt}
            key={idx}
            className={slideClass}
          />
        );
      })}
      <ArrowRight onClick={nextSlide} />
      <Indicators>
        {data.map((_, idx) => {
          return (
            <Indicator
              key={idx}
              active={centerSlide === idx}
              onClick={() => setCenterSlide(idx)}
            />
          );
        })}
      </Indicators>
    </CarouselContainer>
  );
};
