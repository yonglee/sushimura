import styled from "styled-components";

const NavStyles = styled.nav`
  display: flex;
  flex-direction: column;
  width: 260px;
  height: 100vh;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  background: #fff;
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* padding-top: 2rem; */
    padding: 1rem 0;
    /* margin-top: 1rem; */
    li {
      padding: 5px 10px;
      margin-top: 1rem;

      a {
        font-size: 20px;
        font-weight: 600;
        padding: 5px 10px;
        color: #1b1b1b;
        transition: color 300ms linear;

        &.selected {
          color: #8b0000;
        }
      }
    }
  }

  .nav-logo-box {
    background: #1b1b1b;
    /* margin-top: 3rem; */
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    padding: 2rem 0;
    margin-left: 1rem;
    margin-right: 1rem;
  }

  /* @media (max-width: 1024px) and (orientation: portrait) { */
  @media (max-width: 1024px) {
    flex-direction: row;
    /* justify-content: center; */
    width: 100%;
    position: relative;
    /* height: 100%; */
    /* padding: 4px 4px; */
    /* padding: 2px; */
    justify-content: center;
    align-items: center;
    height: 66px;
    padding: 0;
    ul {
      flex-direction: row;
      padding: 0;
      display: flex;
    }
    .main-nav {
      display: none;
    }
    .nav-logo-box {
      margin: 0;
      padding: 0;
      /* padding: 6px 12px; */
      display: flex;
      justify-content: center;
      align-items: center;
      height: 66px;
      li {
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        a {
          margin: 0;
          padding: 0;
          height: 50px;
          img {
            height: 50px;
            width: auto;
          }
        }
      }
    }

    .mobile-nav-button-wrapper {
      display: flex;
      align-items: center;
      position: absolute;
      left: 10px;
      top: 50%;
      transform: translate(10px, -50%);
      .mobile-nav-button {
        cursor: pointer;

        .bar1,
        .bar2,
        .bar3 {
          width: 35px;
          height: 5px;
          /* background: #1b1b1b; */
          background: #fff;
          margin: 6px 0;
          transition: transform 200ms ease-out;
        }

        &.change {
          .bar1 {
            transform: rotate(-45deg) translate(-9px, 6px);
          }
          .bar2 {
            opacity: 0;
          }
          .bar3 {
            transform: rotate(45deg) translate(-8px, -8px);
          }
        }
      }
    }
  }
  .mobile-nav-links-wrapper {
    display: none;
  }
  @media (max-width: 1024px) {
    /* position: sticky; */

    top: 0;
    left: 0;
    position: fixed;
    width: 100%;
    background: #1b1b1b;
    .mobile-nav-links-wrapper {
      border-top: 1px solid #6c757d;
      display: flex;
      justify-content: center;
      position: fixed;
      width: 100%;
      height: calc(100vh - 66px);
      top: 66px;
      z-index: 999;
      background: #1b1b1b;
      left: 0;
      transform: translateX(-100%);
      transition: transform 200ms ease-out;

      ul {
        display: flex;
        flex-direction: column;
        margin-top: 2rem;
        li {
          margin: 1rem 0;
          a {
            color: #fff;
            &.selected {
              color: #8b0000;
            }
          }
        }
      }
    }
    .mobile-nav-links-wrapper.isOpen {
      transform: translateX(0);
    }
  }
`;

export default NavStyles;
