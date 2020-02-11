import styled from "styled-components";

const SliderStyles = styled.div`
  position: relative;
  /* overflow: hidden; */
  width: 100%;
  /* width: calc(100vw - 200px); */
  height: 100vh;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  .slider-container {
    position: absolute;
    display: flex;
    width: calc(100vw - 200px);
    /* width: 100%; */
    height: 100vh;
    transition: all 500ms linear;
    .slide {
      width: calc(100vw - 200px);
      /* width: 100%; */
      height: 100vh;

      img {
        width: calc(100vw - 200px);
        /* width: 100%; */
        height: 100vh;
      }
    }
  }
  .slider-btn {
    z-index: 999;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    &.left-btn {
      left: 5%;
    }
    &.right-btn {
      right: 5%;
    }
    .fa.fa-chevron-left,
    .fa.fa-chevron-right {
      color: #fff;
      font-size: 30px;
    }
  }
`;

export default SliderStyles;
