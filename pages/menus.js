import { withRouter } from "next/router";
import PropTypes from "prop-types";
import MenuNav from "../components/MenuNav";
// const MenuNav = dynamic(() => import("../components/MenuNav"), { ssr: false });
import Head from "../components/Head";
import MenuContents from "../components/MenuContents";
import menuData from "../data/menuData";

const Menus = ({ title }) => {
  const data = menuData[title.toLowerCase()];
  // const seoHead = {
  //   title: `${data.title} | Menu | Sushi Mura`,
  //   description: props.router.query.title
  // };

  // console.log("data", data);

  return (
    <>
      {/* <Head {...seoHead} /> */}
      <MenuNav />
      <div className="menu-content-container">
        {data && <MenuContents data={data} />}
      </div>
    </>
  );
};

Menus.propTypes = {
  title: PropTypes.string.isRequired
};

Menus.getInitialProps = ctx => {
  console.log(ctx.query.title);
  return { title: ctx.query.title.split("-").join(" ") };
};

export default withRouter(Menus);
