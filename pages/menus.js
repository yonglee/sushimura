import { withRouter } from "next/router";
import dynamic from "next/dynamic";
import MenuNav from "../components/MenuNav";
// const MenuNav = dynamic(() => import("../components/MenuNav"), { ssr: false });

const Menus = props => {
  return (
    <>
      <MenuNav />
      <h1>{props.router.query.title}</h1>
      <h1>{props.router.query.title}</h1>
      <h1>{props.router.query.title}</h1>
      <h1>{props.router.query.title}</h1>
      <h1>{props.router.query.title}</h1>
      <h1>{props.router.query.title}</h1>
      <h1>{props.router.query.title}</h1>
      <h1>{props.router.query.title}</h1>
    </>
  );
};

export default withRouter(Menus);
