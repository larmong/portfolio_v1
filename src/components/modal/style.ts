import styled from "@emotion/styled";
import { Common } from "@commons/styles/emotion";
import { IsModalType } from "@components/modal/type";
import { mediaQuery } from "@commons/styles/mediaQuery";

export const Wrapper = styled.div`
  transition: all 0.8s ease;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: ${(props: IsModalType) => (props.isModal ? "1000" : "-1")};
  background: ${(props: IsModalType) =>
    props.isModal ? "rgba(255, 255, 255, 0.25)" : "rgba(255, 255, 255, 0)"};
`;

export const ModalWrapper = styled.div`
  transition: transform 0.8s ease;
  display: flex;
  flex-direction: column;
  gap: 30px;
  position: fixed;
  top: 0;
  right: 0;
  width: 700px;
  height: 100vh;
  padding: 30px;
  background: url("/assets/images/noise-background.jpg") top center / cover
    no-repeat;
  transform: ${(props: IsModalType) =>
    props.isModal ? "translateX(0px)" : "translateX(700px)"};
  .top-cont {
    display: flex;
    justify-content: space-between;
  }
  .bottom-cont {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  ${mediaQuery[1]} {
     {
      gap: 20px;
      width: 100vw;
      padding: 20px;
      transform: ${(props: IsModalType) =>
        props.isModal ? "translateX(0px)" : "translateX(100vw)"};
      .bottom-cont {
        gap: 20px;
      }
    }
  }
`;

export const TitleWrapper = styled.div`
  width: calc(100% - 80px);
  display: flex;
  flex-direction: column;
  gap: 10px;
  span {
    font-weight: bold;
    color: ${Common.color.point};
    text-transform: uppercase;
  }
  p {
    width: auto;
    font-size: 16px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: ${Common.color.lightGray};
    font-family: ${Common.font.ko};
  }

  ${mediaQuery[1]} {
    width: calc(100% - 60px);
    font-size: 14px;
    gap: 6px;
    p {
      font-size: 14px;
    }
  }
`;

export const CloseBtn = styled.div`
  margin-top: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  cursor: pointer;
  border: 1px solid ${Common.color.lightGray};
  padding-bottom: 1px;
  svg {
    width: 25px;
    height: 25px;
    color: ${Common.color.lightGray};
  }

  ${mediaQuery[1]} {
    margin-top: 5px;
    width: 28px;
    height: 28px;
    svg {
      width: 22px;
      height: 22px;
    }
  }
`;

export const ImgBox = styled.div`
  width: 100%;
  height: 400px;
  border: 1px solid ${Common.color.lightGray};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  ${mediaQuery[1]} {
    height: 30vh;
    background-position: top center;
  }
`;

export const TagGroup = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const BtnGroup = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  height: 40px;
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 100%;
    color: ${Common.color.lightGray};
    border: 1px solid ${Common.color.lightGray};
    cursor: pointer;
    span {
      display: inline-block;
      margin-left: 5px;
    }
  }

  ${mediaQuery[1]} {
    gap: 12px;
    height: 34px;
    > div {
      font-size: 12px;
      span {
        display: inline-block;
        margin-left: 5px;
      }
    }
  }
`;

export const TextCont = styled.div`
  text-transform: uppercase;
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    font-family: ${Common.font.ko};
    li {
      &.optimization {
        display: flex;
        gap: 30px;
        opacity: 0.5;
        span {
          position: relative;

          &:not(:last-of-type)::before {
            content: "";
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: -15px;
            width: 1px;
            height: 12px;
            background: #fff;
          }
        }
      }
      &.dec {
        text-align: center;
        margin-top: 20px;
        line-height: 24px;
      }
    }
  }

  ${mediaQuery[1]} {
    ul {
      gap: 10px;
      li {
        font-size: 13px;
        &.dec {
          margin-top: 10px;
        }
      }
    }
  }
`;
