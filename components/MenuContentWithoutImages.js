import React from "react";
import PropTypes from "prop-types";
import MenuContentWithoutImagesStyles from "../styles/MenuContentWithoutImagesStyles";

const MenuItem = ({ item, index }) => (
  <div className={"item " + (index % 2 === 0 ? "odd" : "even")}>
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
);

const MenuContentWithoutImages = ({ data }) => {
  console.log("MenuContentWithoutImages: ", data[0].size_title);
  console.log(data);
  return (
    <MenuContentWithoutImagesStyles>
      {data[0].size_title ? (
        <>
          {data.map(size_items => (
            <div key={size_items.id} className="size-title-box">
              <h2 className="size-title">{size_items.size_title}</h2>
              <div className="items">
                {size_items.items.map((item, index) => (
                  <MenuItem key={item.id} item={item} index={index} />
                ))}
              </div>
            </div>
          ))}
        </>
      ) : (
        <div className="items">
          {data.map((item, index) => (
            <MenuItem key={item.id} item={item} index={index} />
          ))}
        </div>
      )}
    </MenuContentWithoutImagesStyles>
  );
};

MenuContentWithoutImages.propTypes = {
  data: PropTypes.array.isRequired
};

export default MenuContentWithoutImages;
