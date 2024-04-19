import styled from "@emotion/styled";
import { mediaQuery } from "@commons/styles/mediaQuery";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  opacity: 0.1;
`;

export const Page = styled.div`
  padding-top: 120px;
  background: url("/assets/images/noise-background.jpg") top center / cover
    no-repeat;
  section {
    display: block;
    min-height: calc(100vh - 170px);
    height: calc(100% - 50px);
  }
  footer {
    span {
      display: flex;
      opacity: 0.8;
      color: #fff;
      height: 50px;
      align-items: center;
      justify-content: center;
      font-size: 14px;
    }
  }

  ${mediaQuery[1]} {
    padding-top: 140px;
    footer {
      padding: 10px 0;
      .footer-contact {
        padding-top: 30px;
        display: flex;
        gap: 30px;
        align-items: center;
        justify-content: center;
        li {
          width: 16px;
          height: 16px;
          svg {
            width: 100%;
            height: 100%;
          }
          &.github {
            width: 20px;
            height: 20px;
          }
          &.pdf {
            width: 18px;
            height: 18px;
          }
        }
      }
      span {
        height: 50px;
        font-size: 12px;
      }
    }
  }
`;
