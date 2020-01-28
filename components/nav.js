import React from "react";
// import navStyles from "../styles/nav.scss";
import uuid from "uuid";
import Link from "./Link";
import navData from "../data/navData";

const Nav = () => (
  <nav className="nav">
    <ul>
      {navData.map(link => (
        <li key={uuid.v4()}>
          <Link href={link.href}>
            <a>{link.title}</a>
          </Link>
        </li>
      ))}
    </ul>
    <style jsx>
      {`
        .selected {
          color: orange;
        }
      `}
    </style>
  </nav>
);

export default Nav;
