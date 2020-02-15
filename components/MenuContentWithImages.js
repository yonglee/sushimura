import React from "react";
import PropTypes from "prop-types";

const MenuContentWithImages = ({ data }) => {
  return <li className="item">{item.title}</li>;
};

MenuContentWithImages.propTypes = {
  data: PropTypes.array.isRequired
};

export default MenuContentWithImages;
