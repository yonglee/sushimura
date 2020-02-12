import React from "react";
import PropTypes from "prop-types";
import MenuContentsStyles from "../styles/MenuContentsStyles";
// import menuData from "../data/menuData";

const MenuContents = ({ data }) => {
  // const withImages = menuData[0].items.filter(item => item.small !== "");
  // const withoutImages = menuData[0].items.filter(item => item.small === "");
  // console.log(withoutImages);
  // console.log(menuData[0]);

  console.log(data);
  return (
    <MenuContentsStyles>
      <h1>Menu Content</h1>
      <h1>Menu Content</h1>
      <h1>Menu Content</h1>
      <h1>Menu Content</h1>
      <h1>Menu Content</h1>
      <h1>Menu Content</h1>
      <h1>Menu Content</h1>
      <h1>Menu Content</h1>
      <h1>Menu Content</h1>
      <h1>Menu Content</h1>
      <h1>Menu Content</h1>
    </MenuContentsStyles>
  );
};

MenuContents.propTypes = {
  data: PropTypes.object.isRequired
};

export default MenuContents;
