import { withRouter, useRouter } from "next/router";
import PropTypes from "prop-types";
// import styled from "styled-components";

import MenuNav from "../components/MenuNav";
// const MenuNav = dynamic(() => import("../components/MenuNav"), { ssr: false });
import Head from "../components/Head";
import MenuContents from "../components/MenuContents";
import menuData from "../data/menuData";

const Menus = ({ title, path }) => {
  const data = menuData[title.toLowerCase()];
  // console.log(title, path);
  // const seoHead = {
  //   title: `${data.title} | Menu | Sushi Mura`,
  //   description: props.router.query.title
  // };

  return (
    <div className="menu-page-wrapper">
      {/* <Head {...seoHead} /> */}
      <MenuNav path={path} />
      <div className="menu-content-container">
        {data && <MenuContents data={data} />}
      </div>
    </div>
  );
};

Menus.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
};

Menus.getInitialProps = ctx => {
  // console.log(ctx.router);
  const title = ctx.asPath
    .split("/")[2]
    .split("-")
    .join("_");

  return { title, path: ctx.asPath };
};

// const Menus = props => {
//   const data =
//     menuData[
//       props.router.asPath
//         .split("/")[2]
//         .split("-")
//         .join("_")
//     ];

//   // const data = menuData[title.toLowerCase()];

//   // const seoHead = {
//   //   title: `${data.title} | Menu | Sushi Mura`,
//   //   description: props.router.query.title
//   // };

//   return (
//     <div className="menu-page-wrapper">
//       {/* <Head {...seoHead} /> */}
//       <MenuNav path={props.router.asPath} />
//       <div className="menu-content-container">
//         {data && <MenuContents data={data} />}
//       </div>
//     </div>
//   );
// };

// const Menus = props => {
//   console.log(useRouter());
//   const data =
//     menuData[
//       useRouter()
//         .asPath.split("/")[2]
//         .split("-")
//         .join("_")
//     ];

//   // const data = menuData[title.toLowerCase()];

//   // const seoHead = {
//   //   title: `${data.title} | Menu | Sushi Mura`,
//   //   description: props.router.query.title
//   // };

//   return (
//     <div className="menu-page-wrapper">
//       {/* <Head {...seoHead} /> */}
//       <MenuNav path={useRouter().asPath} />
//       <div className="menu-content-container">
//         {data && <MenuContents data={data} />}
//       </div>
//     </div>
//   );
// };

export default withRouter(Menus);
