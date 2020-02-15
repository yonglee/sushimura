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
  if (typeof window !== "undefined") {
    Router.push(`/menus?title=special%20roll`, `/m/special-roll`);
    return null;
  }
  return (
    <>
      {/* <Head {...seoHead} /> */}
      {/* <MenuNav /> */}
    </>
  );
};

Menu.getInitialProps = async ctx => {
  // console.log("get initial menu", ctx);
  if (ctx.res) {
    await ctx.res.writeHead(302, {
      Location: "/m/special-roll"
    });
    ctx.res.end();
  }
  return {};
};

export default withRouter(Menu);
