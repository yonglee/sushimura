import React from "react";
import App from "next/app";
import "babel-polyfill";
import Page from "../components/Page";

class MyApp extends App {
  static getInitialProps = async ({ Component, ctx }) => {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return { pageProps };
  };

  render = () => {
    const { Component, pageProps } = this.props;

    return (
      <Page>
        <Component {...pageProps} />
      </Page>
    );
  };
}

export default MyApp;
