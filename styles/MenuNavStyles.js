import styled from "styled-components";

const MenuNavStyles = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  background: black;
  .menu-nav-box-outer {
    background: red;
    width: 100%;
    max-width: 1000px;
    height: 100px;
    display: flex;
    flex-wrap: nowrap;
    padding: 1rem;
    overflow: hidden;
    overflow-x: auto;
    position: relative;

    .menu-nav-box {
      height: 100px;
      position: absolute;
      display: flex;
      align-items: center;
      flex-wrap: nowrap;
      background: yellow;
      li {
        margin-left: 1rem;
        a {
          white-space: nowrap;
          &.active {
            color: blue;
          }
        }
      }
    }
  }
`;

export default MenuNavStyles;
