import React from "react";
import PropTypes from "prop-types";
import Head from "../components/Head";

const seoHead = {
  title: "Contact",
  description: "Test Contact Page"
};

const contact = props => {
  return (
    <div>
      <Head {...seoHead} />
      Contact
    </div>
  );
};

contact.propTypes = {};

export default contact;
