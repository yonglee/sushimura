import styled from "styled-components";

const MenuContentWithoutImagesStyles = styled.div`
  padding: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  * {
    overflow: hidden;
  }

  .size-title-box {
    margin-top: 2rem;
    width: 90%;
    display: flex;
    flex-direction: column;
    .size-title {
      color: orange;
    }
    .items {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      /* justify-content: center; */
      .item {
        margin-top: 1rem;
        /* flex-basis: 50%; */
        width: 50%;
        display: flex;
        flex-direction: column;
        &.odd {
          padding-right: 10px;
        }
        &.even {
          padding-left: 10px;
        }
        .title-box {
          display: flex;
          .title {
            /* flex: 1; */
            font-weight: 700;
            font-size: 18px;
            max-width: 300px;
          }
          .dot-box {
            flex: 1;
            margin: 0 10px 0 10px;
            overflow: hidden;
          }
          .price {
            /* flex: 1; */
            color: #8b0000;
            font-weight: 700;
            /* font-style: italic; */
            /* font-size: 18px; */
          }
        }

        &.odd,
        &.even {
          .desc {
            /* font-style: italic; */
            margin-left: 4px;
            /* font-size: 14px; */
            color: ${props => props.theme.darkGreen};
          }
        }
      }
    }
  }

  .items {
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    /* justify-content: center; */
    .item {
      margin-top: 1rem;
      /* flex-basis: 50%; */
      width: 50%;
      display: flex;
      flex-direction: column;
      &.odd {
        padding-right: 10px;
      }
      &.even {
        padding-left: 10px;
      }
      .title-box {
        display: flex;
        .title {
          /* flex: 1; */
          font-weight: 700;
          font-size: 18px;
          max-width: 300px;
        }
        .dot-box {
          flex: 1;
          margin: 0 10px 0 10px;
          overflow: hidden;
        }
        .price {
          /* flex: 1; */
          color: #8b0000;
          font-weight: 700;
          /* font-style: italic; */
          /* font-size: 18px; */
        }
      }

      &.odd,
      &.even {
        .desc {
          /* font-style: italic; */
          margin-left: 4px;
          /* font-size: 14px; */
          color: ${props => props.theme.darkGreen};
        }
      }
    }
  }
  @media (max-width: 600px) {
    .size-title-box {
      width: 100%;
    }
    padding: 1rem;
    .items {
      width: 100%;
      .item {
        flex-basis: 100%;
        &.odd {
          padding-right: 0 !important;
        }
        &.even {
          padding-left: 0 !important;
        }
        .title-box {
          .title {
            min-width: 140px;
            /* font-size: 16px; */
          }
        }
      }
    }
  }
  @media (max-width: 380px) {
    .items {
      .item {
        &.odd {
        }
        &.even {
        }
        .title-box {
          .title {
            max-width: 200px;
          }
        }
      }
    }
  }
`;

export default MenuContentWithoutImagesStyles;
