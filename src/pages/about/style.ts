import styled from "@emotion/styled";
import { mediaQuery } from "@commons/styles/mediaQuery";

export const Wrapper = styled.div``;

export const Contents = styled.div``;

export const TabContents = styled.div`
  color: #fff;
  font-size: 24px;
  line-height: 50px;
  display: flex;
  justify-content: space-between;
  margin: 150px 0;
  .text-wrapper {
    font-family: "Chosunilbo_myungjo", sans-serif;
    width: 65%;
    display: flex;
    flex-direction: column;
    gap: 40px;

    em {
      position: relative;
      cursor: pointer;

      &::before,
      &::after {
        content: "";
        position: absolute;
        bottom: -10px;
        left: 0;
        width: 100%;
        height: 1px;
        background: #fff;
        opacity: 0.2;
      }

      &::after {
        transition: width 0.4s ease;
        width: 0;
        opacity: 1;
      }

      &:hover {
        &::after {
          width: 100%;
          opacity: 1;
        }
      }

      i {
        opacity: 0.3;
        transition: opacity 0.4s ease;

        &:hover {
          opacity: 1;
        }
      }
    }
  }
  .img-wrapper {
    text-align: right;
    width: 35%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    .img {
      margin-left: auto;
      width: 300px;
      height: 300px;
      border: 1px solid rgba(255, 255, 255, 0.5);

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  ${mediaQuery[1]} {
    font-size: 16px;
    line-height: 30px;
    margin: 20px 0;
    .text-wrapper {
      width: 100%;
      gap: 20px;
      color: rgba(255, 255, 255, 0.6);
      em {
        cursor: inherit;
        color: rgba(255, 255, 255, 1);
        &::before,
        &::after {
          content: none;
        }
        i {
          opacity: 1;
        }
      }
    }
    .img-wrapper {
      display: none;
    }
  }
  ${mediaQuery[2]} {
    font-size: 14px;
  }
`;
