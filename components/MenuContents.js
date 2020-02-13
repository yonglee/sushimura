import React from "react";
import PropTypes from "prop-types";
import MenuContentsStyles from "../styles/MenuContentsStyles";
import MenuContent from "../components/MenuContent";
// import menuData from "../data/menuData";

const MenuContents = ({ data }) => {
  const withImages = data.items.filter(item => item.small === "");
  const withoutImages = data.items.filter(item => item.small !== "");
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
      <div className="menu-contents-box">
        <p className="menu-desc">{data.desc}</p>
        <p className="menu-desc2">{data.desc2}</p>
        {/* <ul>
        {withImages.map(item => (
          <MenuContent key={item.id} item={item} />
        ))}
      </ul> */}
        <ul className="menu-contents-with-images">
          {withImages.map(item => (
            <MenuContent key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </MenuContentsStyles>
  );
};

MenuContents.propTypes = {
  data: PropTypes.object.isRequired
};

export default MenuContents;
