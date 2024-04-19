import styled from "@emotion/styled";
import { mediaQuery } from "@commons/styles/mediaQuery";

export const Wrapper = styled.div``;
export const IntroCont = styled.div`
  display: flex;
  justify-content: space-between;
  height: calc(100vh - 180px);
  border-bottom: 1px solid #ebeae6;
  .left {
    width: 45%;
    display: flex;
    justify-content: center;
    overflow: hidden;
    height: 100%;
    background: url("/assets/images/main.png") top center / cover no-repeat;
  }
  .right {
    width: 55%;
    padding-left: 24px;
    color: #fff;

    .intro-title {
      display: flex;
      justify-content: space-between;
      font-size: 50px;
      font-weight: 600;
      padding: 40px 0;
      border-bottom: 1px solid #ebeae6;
    }

    .intro-link {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 40px 0;
      border-bottom: 1px solid #ebeae6;

      > div {
        display: flex;
        flex-direction: column;
        gap: 10px;
        text-transform: uppercase;

        span {
          position: relative;
          display: inline-block;
        }
      }

      > div:first-of-type {
        span {
          padding-left: 20px;

          &::before {
            content: "#";
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
          }
        }
      }

      > div:last-of-type {
        gap: 15px;
        text-align: right;
        font-weight: bold;
      }
    }

    .intro-name {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      height: calc(100% - 456px);

      p {
        opacity: 0;
        transform: scaleY(1.3);
        font-family: "Rubik Mono One", sans-serif;
        font-size: 100px;
        text-transform: uppercase;
      }

      p:last-of-type {
        color: transparent;
        -webkit-text-stroke: 2px #fff;
      }
    }

    .intro-dsc {
      font-family: "Chosunilbo_myungjo", sans-serif;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 10px;
      padding: 40px 0;
      border-top: 1px solid #ebeae6;
      text-align: right;
      span {
        opacity: 0;
      }
    }
  }

  ${mediaQuery[1]} {
    justify-content: flex-start;
    flex-direction: column;
    height: auto;

    .left {
      width: 100%;
      height: 55vh;
      background: url("/assets/images/main.png") bottom center / cover no-repeat;
    }

    .right {
      width: 100%;
      padding-left: 0;

      .intro-title {
        font-size: 30px;
        padding: 26px 0;
      }
      .intro-link {
        padding: 26px 0;
        font-size: 14px;
        > div {
          gap: 6px;
        }
        > div:first-of-type {
          span {
            padding-left: 16px;
          }
        }
        > div:last-of-type {
          gap: 10px;
        }
      }
      .intro-name {
        padding: 26px 0;
        height: auto;
        p {
          font-size: 50px;
        }
        p:last-of-type {
          -webkit-text-stroke: 1px #fff;
        }
      }
      .intro-dsc {
        gap: 4px;
        padding: 26px 0 30px 0;
        span {
          &:nth-of-type(2) {
            line-height: 30px;
          }
        }
      }
    }
  }
`;
