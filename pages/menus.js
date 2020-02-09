import { withRouter } from "next/router";
import MenuNav from "../components/MenuNav";

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
