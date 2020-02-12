import React, { useState } from "react";
// import navStyles from "../styles/nav.scss";
import uuid from "uuid";
import Link from "./Link";
import navData from "../data/navData";
import NavStyles from "../styles/NavStyles";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <NavStyles>
        <ul className="nav-logo-box">
          <li>
            <Link href="/">
              <a onClick={() => setIsOpen(false)}>
                <img src="/sushimura_logo_121x60.png" alt="" />
              </a>
            </Link>
          </li>
        </ul>
        <ul className="main-nav">
          {navData.map(link => (
            <li key={link.id}>
              <Link href={link.href}>
                <a>{link.title}</a>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mobile-nav-button-wrapper">
          <div
            className={"mobile-nav-button " + (isOpen ? "change" : "")}
            onClick={onClick}
          >
            <div className="bar1" />
            <div className="bar2" />
            <div className="bar3" />
          </div>
        </div>
        <div className={"mobile-nav-links-wrapper " + (isOpen ? "isOpen" : "")}>
          <ul>
            {navData.map(link => (
              <li key={link.id}>
                <Link href={link.href}>
                  <a onClick={onClick}>{link.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </NavStyles>
    </>
  );
};

export default Nav;
