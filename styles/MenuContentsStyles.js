import styled from "styled-components";

const MenuContentsStyles = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  /* padding: 1rem; */
  /* background: ${props => props.theme.papayaWhip}; */
  background: #fff;
  border-radius: 4px;
  /* background: #1c2e4a; */
  /* background: #1b1b1b; */
  .menu-title-box {
    background: url("/menu/menu-header-bg.jpg");
    background-position: center center;
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 4px 4px 0 0;
    @media (max-width: 1024px) {
      height: 100px;
    }
    .menu-title {
      /* font-size: 64px; */
      font-size: 48px;
      line-height: 1;
      font-weight: 900;
      text-align: center;
      color: #fff;
      /* text-transform: uppercase; */
      @media (max-height: 600px) {
        font-size: 32px;
      }
      @media (max-width: 640px) {
        font-size: 32px;
      }
    }

    .menu-logo-box {
      position: absolute;
      top: 10px;
      right: 10px;
      background: #000;
      padding: 10px 20px;
      .menu-logo {
        height: 60px;
        width: auto;
      }
      @media (max-width: 1024px) {
        .menu-logo {
          height: 40px;
        }
      }
    }
  }

  .menu-contents-box {
    padding: 1rem;
    .menu-desc, .menu-desc2 {
      width: 100%;
      margin: 0 auto 0 auto;
      text-align: center;
    }
  }

`;

export default MenuContentsStyles;
