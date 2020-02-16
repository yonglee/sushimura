import { withRouter } from "next/router";
import PropTypes from "prop-types";
// import styled from "styled-components";

import MenuNav from "../components/MenuNav";
// const MenuNav = dynamic(() => import("../components/MenuNav"), { ssr: false });
import Head from "../components/Head";
import MenuContents from "../components/MenuContents";
import menuData from "../data/menuData";

// const Menus = ({ title }) => {
//   const data = menuData[title.toLowerCase()];

//   // const seoHead = {
//   //   title: `${data.title} | Menu | Sushi Mura`,
//   //   description: props.router.query.title
//   // };

//   return (
//     <div className="menu-page-wrapper">
//       {/* <Head {...seoHead} /> */}
//       <MenuNav />
//       <div className="menu-content-container">
//         {data && <MenuContents data={data} />}
//       </div>
//     </div>
//   );
// };

// Menus.propTypes = {
//   title: PropTypes.string.isRequired
// };

// Menus.getInitialProps = ctx => {
//   // console.log(ctx);
//   const title = ctx.asPath
//     .split("/")[2]
//     .split("-")
//     .join("_");
//   return { title };
// };

const Menus = props => {
  const data =
    menuData[
      props.router.asPath
        .split("/")[2]
        .split("-")
        .join("_")
    ];
  console.log("props.router", props.router);
  console.log("data", data);

  // const data = menuData[title.toLowerCase()];

  // const seoHead = {
  //   title: `${data.title} | Menu | Sushi Mura`,
  //   description: props.router.query.title
  // };

  return (
    <div className="menu-page-wrapper">
      {/* <Head {...seoHead} /> */}
      <MenuNav />
      <div className="menu-content-container">
        {data && <MenuContents data={data} />}
      </div>
    </div>
  );
};

export default withRouter(Menus);
