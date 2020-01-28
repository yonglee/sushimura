import React from "react";
// import global from "../styles/global.scss";
import "../styles/index.scss";
import Nav from "./nav";

const Page = props => {
  return (
    <div className="wrapper">
      <Nav />
      {props.children}
    </div>
  );
};

export default Page;
