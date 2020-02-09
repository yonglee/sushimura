import React, { useState, useEffect, useRef } from "react";
import uuid from "uuid";
import PropTypes from "prop-types";
import SliderStyles from "../styles/SliderStyles";

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

  const { cards, card } = slides;

  const prevButton = () => {
    const newIndex = card.index - 1;
    if (newIndex === 0) {
      setSlides({
        cards: [...slideData],
        card: slideData[newIndex]
      });
    } else {
      setSlides({ cards: [...slideData], card: slideData[cards.length - 1] });
    }
  };
  const nextButton = () => {
    const newIndex = card.index + 1;
    if (newIndex < cards.length) {
      setSlides({ cards: [...slideData], card: slideData[newIndex] });
    } else {
      setSlides({ cards: [...slideData], card: slideData[0] });
    }
  };

  return (
    <SliderStyles>
      <div
        className="slider-container"
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
      <button className="left-btn slider-btn">
        <i className="fa fa-chevron-left" onClick={prevButton} />
      </button>
      <button className="right-btn slider-btn">
        <i className="fa fa-chevron-right" onClick={nextButton} />
      </button>
    </SliderStyles>
  );
};

Slider.propTypes = {};

export default Slider;
