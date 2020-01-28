import React, { useState, useEffect, useRef } from "react";
import uuid from "uuid";
import PropTypes from "prop-types";

const slideData = [
  {
    title: "Assorted Sashimi",
    index: 0,
    desc: "",
    url: "/carousel/assorted_sashimi.jpg"
  },
  {
    title: "Vernon Roll",
    index: 1,
    desc: "",
    url: "/carousel/vernon_roll.jpg"
  },
  {
    title: "Nigiri Sushi Combo",
    index: 2,
    desc: "",
    url: "/carousel/nigiri_sushi_combo.jpg"
  }
];

const Slide = ({ card }) => (
  <div className="slide">
    <img src={card.url} alt={card.title} />
  </div>
);

const Slider = props => {
  const [slides, setSlides] = useState({
    cards: slideData,
    card: slideData[0]
  });
  const sliderRef = useRef(null);
  const { cards, card } = slides;

  const prevButton = () => {
    const newIndex = card.index - 1;
    if (newIndex >= 0) {
      setSlides({
        slides: [...slideData, ...slideData],
        card: slideData[newIndex]
      });
    } else {
      setSlides({ ...slides, card: slideData[cards.length - 1] });
    }
  };
  const nextButton = () => {
    const newIndex = card.index + 1;
    if (newIndex < cards.length) {
      setSlides({ ...slides, card: slideData[newIndex] });
    } else {
      setSlides({ ...slides, card: slideData[0] });
    }
  };

  console.log(slides);

  return (
    <div className="slider">
      <div
        className="slider-container"
        ref={sliderRef}
        // style={{
        //   transform: `translateX(-${card.index * (100 / cards.length)}%)`
        // }}
        style={{
          transform: `translateX(-${card.index * 100}%)`
        }}
        // style={{
        //   left: `-${card.index * 100}%`
        // }}
      >
        {cards.map(slide => (
          <Slide key={uuid.v4()} card={slide} />
        ))}
      </div>
      <i className="fa fa-chevron-left" onClick={prevButton} />
      <i className="fa fa-chevron-right" onClick={nextButton} />
    </div>
  );
};

Slider.propTypes = {};

export default Slider;
