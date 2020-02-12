import React from "react";
import PropTypes from "prop-types";
import Router, { withRouter } from "next/router";
import Head from "../components/Head";

import MenuNav from "../components/MenuNav";

const seoHead = {
  title: "MENU",
  description: "Test Menu Page"
};

const Menu = props => {
  return (
    <>
      {/* <Head {...seoHead} /> */}
      <MenuNav />
    </>
  );
};

export default withRouter(Menu);
