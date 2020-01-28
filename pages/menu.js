import React from "react";
import PropTypes from "prop-types";
import Head from "../components/Head";

const seoHead = {
  title: "Menu",
  description: "Test Menu Page"
};

const menu = props => {
  return (
    <div>
      <Head {...seoHead} />
      Menu
    </div>
  );
};

menu.propTypes = {};

export default menu;
