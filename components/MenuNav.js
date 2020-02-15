import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import uuid from "uuid";
import Link from "next/link";
// import menuNavData from "../data/menuNavData";
import menuNavData from "../data/menuNavData";
import { useRouter } from "next/router";
import $ from "jquery";
import MenuNavStyles from "../styles/MenuNavStyles";
// import "../styles/menunav.scss";

const MenuNavItem = ({ link }) => {
  useEffect(() => {}, []);

  return (
    <li
      className={useRouter().asPath === `${link.href}` ? "active" : ""}
      style={{
        backgroundImage: `url('${link.image}')`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* <Link
        as={`/m/${link.title.toLowerCase().replace(" ", "-")}`}
        href={`/menus?title=${link.title.toLowerCase().replace(" ", "-")}`}
      > */}
      <Link
        as={`${link.href}`}
        href={`/menus?title=${link.title.toLowerCase()}`}
      >
        <a>
          <div>{link.title}</div>
        </a>
      </Link>
    </li>
  );
};

const MenuNav = ({ path }) => {
  const outer = useRef(null);
  const scrollbarRef = useRef(null);
  const [menuHeight, setMenuHeight] = useState({
    scrollbar: 0,
    scrollbarWidth: 0
  });

  useEffect(() => {
    // console.log(outer);
    setMenuHeight({
      scrollbar: outer.current.scrollHeight - outer.current.offsetHeight,
      scrollbarWidth: outer.current.clientWidth - 62
    });
    if (
      typeof window !== "undefined" &&
      $(".menuav-scroller") &&
      $(".menunav-scroller").find(".active")[0]
    )
      scrollLeft($(".menunav-scroller").find(".active")[0].offsetLeft);
    // console.log("hi ", $(".menunav-scroller").find(".active")[0].offsetLeft);
    // console.log("hi ", $(".menunav-scroller")[0]);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const onResize = () => {
    setMenuHeight({
      ...menuHeight,
      scrollbarWidth: outer.current.clientWidth - 62
    });
  };

  const scrollLeft = offset => {
    $(".menunav-scroller").animate({ scrollLeft: "+=" + offset }, 650);
  };

  const handleLeftClick = () => {
    $(".menunav-scroller").animate(
      {
        scrollLeft: `-=${menuHeight.scrollbarWidth}`
      },
      650
    );
  };

  const handleRightClick = () => {
    $(".menunav-scroller").animate(
      {
        scrollLeft: `+=${menuHeight.scrollbarWidth}`
      },
      650
    );
  };

  return (
    <MenuNavStyles>
      <div className="menunav-container" ref={outer}>
        <button className="left-button button" onClick={handleLeftClick}>
          <i className="fa fa-chevron-left" />
        </button>
        <div className="menunav-scroller" ref={scrollbarRef}>
          <ul>
            {menuNavData.map(link => (
              <MenuNavItem key={link.id} link={link} />
            ))}
            {/* <MenuNavItem link={menuNavData[0]} />
            <MenuNavItem link={menuNavData[1]} />
            <MenuNavItem link={menuNavData[2]} />
            <MenuNavItem link={menuNavData[3]} />
            <MenuNavItem link={menuNavData[4]} />
            <MenuNavItem link={menuNavData[5]} />
            <MenuNavItem link={menuNavData[6]} />
            <MenuNavItem link={menuNavData[7]} />
            <MenuNavItem link={menuNavData[8]} />
            <MenuNavItem link={menuNavData[9]} />
            <MenuNavItem link={menuNavData[10]} />
            <MenuNavItem link={menuNavData[11]} />
            <MenuNavItem link={menuNavData[12]} /> */}
          </ul>
        </div>
        <button className="right-button button" onClick={handleRightClick}>
          <i className="fa fa-chevron-right" />
        </button>
      </div>
    </MenuNavStyles>
  );
};

export default MenuNav;
