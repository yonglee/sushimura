import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import uuid from "uuid";
import Link from "next/link";
import menuNavData from "../data/menuNavData";
import { useRouter } from "next/router";
import $ from "jquery";
import MenuNavStyles from "../styles/MenuNavStyles";

const MenuNavItem = ({ link }) => (
  <li
    className={
      useRouter().asPath === `/m/${link.title.toLowerCase().replace(" ", "-")}`
        ? "active"
        : ""
    }
  >
    <div className="shadow" />
    <Link
      as={`/m/${link.title.toLowerCase().replace(" ", "-")}`}
      href={`/menus?title=${link.title.toLowerCase().replace(" ", "-")}`}
    >
      <a>
        <img src={link.image} alt={link.title} />
        <div>{link.title}</div>
      </a>
    </Link>
  </li>
);

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
    return () => {};
  }, []);

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
              <MenuNavItem key={uuid.v4()} link={link} />
            ))}
          </ul>
        </div>
        <button className="right-button button" onClick={handleRightClick}>
          <i className="fa fa-chevron-right" />
        </button>
      </div>
    </MenuNavStyles>
    // <div className="menunav">
    //   <div className="menunav-container" ref={outer}>
    //     <button className="left-button button" onClick={handleLeftClick}>
    //       <i className="fa fa-chevron-left" />
    //     </button>
    //     <div className="menunav-scroller" ref={scrollbarRef}>
    //       <ul>
    //         {menuNavData.map(link => (
    //           <MenuNavItem key={uuid.v4()} link={link} />
    //         ))}
    //       </ul>
    //     </div>
    //     <button className="right-button button" onClick={handleRightClick}>
    //       <i className="fa fa-chevron-right" />
    //     </button>
    //   </div>
  );
};

export default MenuNav;
