import React from "react";
import PropTypes from "prop-types";
import Head from "../components/Head";

import MenuNav from "../components/MenuNav";

const seoHead = {
  title: "Menu",
  description: "Test Menu Page"
};

const menu = props => {
  return (
    <>
      <Head {...seoHead} />
      <MenuNav />
    </>
  );
};

menu.propTypes = {};

export default menu;
