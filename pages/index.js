import React from "react";
import Head from "../components/Head";
import dynamic from "next/dynamic";
// import Slider from "../components/Slider";
const Slider = dynamic(() => import("../components/Slider"), { ssr: false });

const seoHead = {
  title: "Home",
  description: "Test Home Page"
};

const Home = () => (
  <>
    <Head {...seoHead} />
    <Slider />
    <h1>Hello</h1>
    <h1>Hello</h1>
    <h1>Hello</h1>
    <h1>Hello</h1>
    <h1>Hello</h1>
    <h1>Hello</h1>
    <h1>Hello</h1>
  </>
);

export default Home;
