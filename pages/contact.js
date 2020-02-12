import React from "react";
import PropTypes from "prop-types";
import Head from "../components/Head";

const seoHead = {
  title: "CONTACT | SUSHI MURA",
  description: "Test Contact Page"
};

const contact = props => {
  return (
    <>
      {/* <Head {...seoHead} /> */}
      <div className="heading-box">
        <h1 className="heading">Contact US!!!</h1>
      </div>
    </>
  );
};

contact.propTypes = {};

export default contact;
