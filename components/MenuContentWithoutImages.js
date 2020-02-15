import React from "react";
import PropTypes from "prop-types";
import MenuContentWithoutImagesStyles from "../styles/MenuContentWithoutImagesStyles";

const MenuContentWithoutImages = ({ data }) => {
  return (
    <MenuContentWithoutImagesStyles>
      <div className="items">
        {data.map((item, index) => (
          <div
            key={item.id}
            className={"item " + (index % 2 === 0 ? "odd" : "even")}
          >
            <div className="title-box">
              <div className="title">{item.title}</div>
              <div className="dot-box">
                <div>{`.`.repeat(140)}</div>
              </div>
              <div className="price">{item.price}</div>
            </div>
            {item.desc && item.desc !== "" && (
              <div className="desc">
                <em>{item.desc}</em>
              </div>
            )}
          </div>
        ))}
      </div>
    </MenuContentWithoutImagesStyles>
  );
};

MenuContentWithoutImages.propTypes = {
  data: PropTypes.array.isRequired
};

export default MenuContentWithoutImages;
