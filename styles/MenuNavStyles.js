import styled from "styled-components";

const MenuNavStyles = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  background: #1b1b1b;
  padding: 16px;
  border-top: 1px solid #6c757d;
  border-bottom: 1px solid #6c757d;
  .menunav-container {
    width: 100%;
    max-width: 1200px;
    height: 80px;
    display: flex;
    justify-content: center;
    position: relative;
    overflow: hidden;
    .button {
      /* width: 31px; */
      width: 50px;
      height: 80px;
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
          background: #9e9e9e;
          transition: all 500ms ease-in-out;
          &:before {
            background: rgba(0, 0, 0, 0.4);
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            z-index: 1;
            transition: background 500ms ease-in;
          }
          a {
            width: 120px;
            height: 80px;
            /* padding: 16px; */
            display: flex;
            justify-content: center;
            align-items: center;
            white-space: nowrap;
            background: transparent;
            z-index: 2;
            position: relative;
            font-weight: 600;
            border: 1px solid #000;
            div {
              color: #fff;
              background: rgba(0, 0, 0, 1);
              padding: 6px 10px;
              border-radius: 4px;
              transition: all 300ms ease-in;
            }
          }
          &.active {
            border: 1px solid ${props => props.theme.papayaWhip};
            /* background-position: center center;
            background-size: 110% 110% !important; */
            &:before {
              background: rgba(0, 0, 0, 0);
            }
            a {
              div {
                color: #8b0000;
                background: ${props => props.theme.papayaWhip};
              }
            }
          }
        }
      }
    }
  }

  /* @media (max-width: 1024px) and (orientation: portrait) { */
  @media (max-width: 1024px) {
    padding: 4px 0;
  }
`;

export default MenuNavStyles;
