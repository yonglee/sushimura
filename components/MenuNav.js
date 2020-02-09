import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import uuid from "uuid";
import Link from "next/link";
import menuNavData from "../data/menuNavData";
import MenuNavStyles from "../styles/MenuNavStyles";
import { useRouter } from "next/router";

const MenuNav = ({ path }) => {
  const outer = useRef(null);
  const [menuHeight, setMenuHeight] = useState({
    scrollbar: 0
  });

  useEffect(() => {
    // console.log(outer);
    setMenuHeight({
      scrollbar: outer.current.scrollHeight - outer.current.offsetHeight
    });
    return () => {};
  }, []);

  return (
    <MenuNavStyles>
      <div className="menu-nav-box-outer" ref={outer}>
        <ul
          className="menu-nav-box"
          // style={{ top: `-${menuHeight.scrollbar}` }}
        >
          {menuNavData.map(link => (
            <li key={uuid.v4()}>
              <Link
                as={`/m/${link.title.toLowerCase().replace(" ", "-")}`}
                href={`/menus?title=${link.title
                  .toLowerCase()
                  .replace(" ", "-")}`}
              >
                <a
                  className={
                    useRouter().asPath ===
                    `/m/${link.title.toLowerCase().replace(" ", "-")}`
                      ? "active"
                      : ""
                  }
                >
                  {link.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </MenuNavStyles>
  );
};

export default MenuNav;
