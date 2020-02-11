import styled from "styled-components";

const MenuNavStyles = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  background: #1b1b1b;
  padding: 16px;
  .menunav-container {
    width: 100%;
    max-width: 1200px;
    height: 80px;
    display: flex;
    justify-content: center;
    position: relative;
    overflow: hidden;
    .button {
      width: 31px;
      height: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
      /* padding: 8px; */

      background: rgba(255, 255, 255, 0.5);
      transition: all 200ms linear;
      .fa.fa-chevron-left,
      .fa.fa-chevron-right {
        transition: all 200ms linear;
        color: #fff;
        font-size: 24px;
        /* transform: scale(1); */
      }
      &:hover {
        background: rgba(255, 255, 255, 0.8);
        .fa.fa-chevron-left,
        .fa.fa-chevron-right {
          color: #000;
        }
      }
    }
    .menunav-scroller {
      overflow: hidden;
      overflow-x: auto;
      position: relative;
      width: 100%;
      height: 98px;
      background: transparent;
      margin-left: 4px;
      margin-right: 4px;
      ul {
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        position: relative;
        background: transparent;
        li {
          margin-left: 2px;
          margin-right: 2px;
          /* padding: 1rem;
          padding-top: 2rem; */
          /* padding-top: 1rem; */

          height: 100%;
          position: relative;

          a {
            width: 120px;
            height: 80px;
            padding: 16px;
            display: flex;
            justify-content: center;
            align-items: center;
            white-space: nowrap;
            color: #fff;
            background: transparent;
            z-index: 2;
            div {
              background: rgba(0, 0, 0, 0.5);
              padding: 4px 8px;
              border-radius: 4px;
            }
          }

          &.active {
            .background {
              /* width: 100%;
              height: 100%; */
              &:before {
                background: transparent;
                content: "";
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                z-index: 1;
              }
            }
          }
        }
      }
    }
  }
`;

export default MenuNavStyles;
