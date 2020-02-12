import React from "react";
import FooterStyles from "../styles/FooterStyles";

const Footer = props => {
  return (
    <FooterStyles>
      <div className="bottom">
        <div className="bottom-inner">
          Copyright @ {new Date().getFullYear()} Sushi Mura. All rights
          reserved.
        </div>
      </div>
    </FooterStyles>
  );
};

export default Footer;
