import React from "react";
import PropTypes from "prop-types";
import MenuContentsStyles from "../styles/MenuContentsStyles";
import MenuContentWithImages from "../components/MenuContentWithImages";
import MenuContentWithoutImages from "../components/MenuContentWithoutImages";
// import menuData from "../data/menuData";

const MenuContents = ({ data }) => {
  const withImages = data.items.filter(item => item.small !== "");
  const withoutImages = data.items.filter(item => item.small === "");
  return (
    <MenuContentsStyles>
      <div className="menu-title-box">
        <h1 className="menu-title">{data.title}</h1>
        {/* <div className="menu-logo-box">
          <img
            className="menu-logo"
            src="/sushimura_logo_121x60.png"
            alt="Sushi Mura Logo"
          />
        </div> */}
      </div>
      {data.desc !== "" && (
        <div className="menu-contents-box">
          {data.desc !== "" && (
            <div className="menu-desc">
              <i className="fas fa-star" />
              {data.desc}
            </div>
          )}
          {data.desc2 !== "" && (
            <div className="menu-desc2">
              <i className="fas fa-star" />
              {data.desc2}
            </div>
          )}
        </div>
      )}
      <MenuContentWithoutImages data={withoutImages} />
    </MenuContentsStyles>
  );
};

MenuContents.propTypes = {
  data: PropTypes.object.isRequired
};

export default MenuContents;
