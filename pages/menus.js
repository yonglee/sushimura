import { withRouter } from "next/router";
import dynamic from "next/dynamic";
import MenuNav from "../components/MenuNav";
// const MenuNav = dynamic(() => import("../components/MenuNav"), { ssr: false });
import Head from "../components/Head";
import MenuContents from "../components/MenuContents";

const Menus = props => {
  const seoTitle = props.router.query.title.replace("-", " ").toUpperCase();
  const seoHead = {
    title: `${seoTitle} | MENU | SUSHI MURA`,
    description: props.router.query.title
  };

  return (
    <>
      <Head {...seoHead} />
      <MenuNav />
      {/* <div className="menu-content-container">
        <h1>{props.router.query.title}</h1>
        <h1>{props.router.query.title}</h1>
        <h1>{props.router.query.title}</h1>
        <h1>{props.router.query.title}</h1>
        <h1>{props.router.query.title}</h1>
        <h1>{props.router.query.title}</h1>
        <h1>{props.router.query.title}</h1>
        <h1>{props.router.query.title}</h1>
      </div> */}
      <MenuContents />
    </>
  );
};

export default withRouter(Menus);
