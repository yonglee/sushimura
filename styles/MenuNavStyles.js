import styled from "styled-components";

const MenuNavStyles = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  background: black;
  .menunav-container {
    background: red;
    width: 100%;
    /* max-width: 1000px; */
    /* height: 100px; */
    display: flex;
    flex-wrap: nowrap;
    padding: 1rem;
    overflow: hidden;
    overflow-x: auto;
    position: relative;
    .menunav-absolute {
      ul {
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        background: yellow;
        height: 100px;
        li {
          margin-left: 0.5rem;
          margin-right: 0.5rem;
          padding: 1rem;
          border: 1px solid #eee;
          height: 100%;
          a {
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            white-space: nowrap;
            &.active {
              color: blue;
            }
          }
        }
      }
    }
  }
`;

export default MenuNavStyles;
