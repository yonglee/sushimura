import React from "react";
import PropTypes from "prop-types";
import Head from "../components/Head";
import Nav from "../components/nav";

const seoHead = {
  title: "About",
  description: "Test About page"
};

const about = props => {
  return (
    <div>
      <Head {...seoHead} />
      <Nav />
      About Page
    </div>
  );
};

about.propTypes = {};

export default about;
