import styled from "@emotion/styled";
import { Common } from "@commons/styles/emotion";

export const Wrapper = styled.div`
  padding-top: 140px;
  .container {
    display: flex;
    justify-content: center;
    gap: 100px;
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 200px;
  text-transform: uppercase;
  color: #fff;
`;

export const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  overflow: hidden;
  svg {
    color: #fff;
    width: 100%;
    height: 100%;
  }
  &.t-size {
    background: #fff;
    svg {
      padding-top: 5%;
      color: #000;
      width: 58%;
      height: 58%;
    }
  }
  &.p-size {
    background: #fff;
    svg {
      color: #000;
      width: 65%;
      height: 65%;
    }
  }
`;
export const ContDec = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-family: ${Common.font.ko};
  p {
    font-size: 20px;
  }
  span {
    opacity: 0.6;
  }
`;

export const LinkBtn = styled.div`
  transition: all 0.8s ease;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  border: 1px solid #fff;
  cursor: pointer;

  &::before {
    content: "";
    transition: width 0.8s ease;
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    z-index: 0;
    color: #000;
  }
  &::after {
    content: "click !";
    transition: color 0.8s ease;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    color: rgba(255, 255, 255, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    &::before {
      width: 100%;
    }
    &::after {
      color: rgba(255, 255, 255, 1);
    }
  }
`;
