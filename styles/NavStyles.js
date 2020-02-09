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
        font-size: 18px;
        font-weight: 400;
        padding: 5px 10px;
        color: #1b1b1b;
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
`;

export default NavStyles;
