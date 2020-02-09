import React from "react";
// import navStyles from "../styles/nav.scss";
import uuid from "uuid";
import Link from "./Link";
import navData from "../data/navData";
import NavStyles from "../styles/NavStyles";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();

  return (
    <NavStyles>
      <ul className="nav-logo-box">
        <li>
          <Link href="/">
            <a>
              <img src="/sushimura_logo_121x60.png" alt="" />
            </a>
          </Link>
        </li>
      </ul>
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
            // color: orange;
            color: #8b0000;
          }
        `}
      </style>
    </NavStyles>
  );
};

export default Nav;
