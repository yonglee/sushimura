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
      margin: 0 auto;
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
        text-align: left;
        &.odd {
          /* padding-right: 10px; */
          padding-right: 1rem;
        }
        &.even {
          /* padding-left: 10px; */
          padding-left: 1rem;
        }
        .title-box {
          display: flex;
          .title {
            font-weight: 700;
            font-size: 18px;
            /* max-width: 300px; */
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            div {
              display: inline-block;
            }
          }
          .dot-box {
            flex: 1;
            margin: 0 5px 0 5px;
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

        .title-desc-box {
          display: flex;
          justify-content: flex-start;
          padding-left: 1rem;
          .title-desc {
            font-size: 14px;
            font-weight: 700;
            color: ${props => props.theme.secondary};
          }
        }

        &.odd,
        &.even {
          .desc {
            /* font-style: italic; */
            /* margin-left: 4px; */
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
    margin-top: 1rem;
    /* justify-content: center; */
    .item {
      margin-top: 1rem;
      /* flex-basis: 50%; */
      width: 50%;
      display: flex;
      flex-direction: column;
      &.odd {
        /* padding-right: 10px; */
        padding-right: 1rem;
      }
      &.even {
        /* padding-left: 10px; */
        padding-left: 1rem;
      }
      .title-box {
        display: flex;
        justify-content: flex-start;
        .title {
          font-weight: 700;
          font-size: 18px;
          /* max-width: 300px; */
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          div {
            display: inline-block;
          }
        }
        .dot-box {
          flex: 1;
          margin: 0 5px 0 5px;
          overflow: hidden;
        }
        .price {
          /* flex: 1; */
          color: #8b0000;
          font-weight: 700;
          /* font-style: italic; */
          /* font-size: 18px; */
          text-align: right;
        }
      }

      .title-desc-box {
        display: flex;
        justify-content: flex-start;
        padding-left: 1rem;
        .title-desc {
          font-size: 14px;
          font-weight: 700;
          color: ${props => props.theme.secondary};
        }
      }

      &.odd,
      &.even {
        .desc {
          /* padding-left: 4px; */
          em {
            color: ${props => props.theme.darkGreen};
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    .items {
      .item {
        &.odd {
          padding-right: 8px !important;
        }
        &.even {
          padding-left: 8px !important;
        }
        .title-box {
          .title {
            max-width: 200px;
          }
        }
      }
    }
  }

  @media (max-width: 600px) {
    .size-title-box {
      width: 100%;
      margin-top: 1rem;
    }
    padding: 1rem;
    .items {
      width: 100%;
      margin-top: 0;
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
            /* min-width: 140px; */
            /* max-width: 200px */
            font-size: 16px;
          }
        }
      }
    }
  }
  /* @media (max-width: 380px) {
    .item {
      .title-box {
        .title {
          max-width: 200px;
        }
      }
    }
  } */
`;

export default MenuContentWithoutImagesStyles;
