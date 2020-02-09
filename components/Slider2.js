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

const Slide = ({ card, currentIndex }) => (
  <div className="slide">
    <img src={card.url} alt={card.title} />
  </div>
);

const Slider = props => {
  const [cards, setCards] = useState([...slideData]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [directionClass, setDirectionClass] = useState("next");

  const prevButton = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : slideData.length - 1;

    setCards(items => [slideData[slideData.length - 1], ...slideData]);
    setDirectionClass("prev");
    setCurrentIndex(newIndex);
  };
  const nextButton = () => {
    console.log("next clicked", currentIndex);
    const newIndex =
      currentIndex === slideData.length - 1 ? 0 : currentIndex + 1;

    setCards(items => [...slideData, slideData[0]]);
    setDirectionClass("next");
    setCurrentIndex(newIndex);
  };

  console.log(directionClass, currentIndex);

  return (
    <div className="slider">
      <div className={"slider-container " + directionClass}>
        {/* {cards.map(slide => (
          <Slide key={uuid.v4()} card={slide} currentIndex={currentIndex} />
        ))} */}
        <Slide
          key={uuid.v4()}
          card={
            cards[
              currentIndex === 0
                ? slideData[slideData.length - 1]
                : currentIndex - 1
            ]
          }
        />
        <Slide key={uuid.v4()} card={slideData[currentIndex]} />
        <Slide
          key={uuid.v4()}
          card={
            slideData[
              currentIndex === slideData.length - 1 ? 0 : currentIndex + 1
            ]
          }
        />
      </div>
      <i className="fa fa-chevron-left" onClick={prevButton} />
      <i className="fa fa-chevron-right" onClick={nextButton} />
    </div>
  );
};

Slider.propTypes = {};

export default Slider;
