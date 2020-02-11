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
    height: 82px;
    display: flex;
    justify-content: center;
    position: relative;
    overflow: hidden;
    .button {
      width: 31px;
      height: 82px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgba(255, 255, 255, 0.5);
      transition: all 200ms linear;
      .fa.fa-chevron-left,
      .fa.fa-chevron-right {
        transition: all 200ms linear;
        color: #fff;
        font-size: 24px;
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
      -webkit-overflow-scrolling: touch;
      overflow: hidden;
      overflow-x: auto;
      position: relative;
      width: 100%;
      height: 100px;
      background: transparent;
      margin-left: 4px;
      margin-right: 4px;
      ul {
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        position: relative;
        background: transparent;
        height: 80px;
        li {
          margin-left: 2px;
          margin-right: 2px;
          position: relative;
          height: 100%;
          /* transform: translateZ(0);
          perspective: 1000;
          backface-visibility: hidden; */
          border: 1px solid ${props => props.theme.grey2};
          transition: all 500ms linear;
          background: #9e9e9e;
          &:before {
            background: rgba(0, 0, 0, 0.2);
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            z-index: 1;
          }
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
            position: relative;
            font-weight: 600;
            div {
              background: rgba(0, 0, 0, 1);
              padding: 6px 12px;
              border-radius: 4px;
            }
          }
          &.active {
            border: 1px solid ${props => props.theme.papayaWhip};
            &:before {
              background: rgba(0, 0, 0, 0);
            }
            a {
              /* color: #000; */
              color: #8b0000;
              div {
                background: ${props => props.theme.papayaWhip};
              }
            }
          }
        }
      }
    }
  }
`;

export default MenuNavStyles;
