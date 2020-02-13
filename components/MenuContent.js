import React from "react";
import PropTypes from "prop-types";

const MenuContent = ({ item }) => {
  return <li className="item">{item.title}</li>;
};

MenuContent.propTypes = {
  item: PropTypes.object.isRequired
};

export default MenuContent;
