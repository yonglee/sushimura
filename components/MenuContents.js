import React from "react";
import PropTypes from "prop-types";
import MenuContentsStyles from "../styles/MenuContentsStyles";
import menuData from "../data/menuData";

const MenuContents = props => {
  const withImages = menuData[0].items.filter(item => item.small !== "");
  const withoutImages = menuData[0].items.filter(item => item.small === "");
  // console.log(withoutImages);
  // console.log(menuData[0]);
  return <MenuContentsStyles>asdf</MenuContentsStyles>;
};

MenuContents.propTypes = {};

export default MenuContents;
