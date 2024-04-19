import styled from "@emotion/styled";
import { Common } from "@commons/styles/emotion";
import { mediaQuery } from "@commons/styles/mediaQuery";

export const Wrapper = styled.div`
  padding-bottom: 30px;
`;

export const BoardTab = styled.ul`
  display: flex;
  justify-content: center;
  gap: 40px;
  padding: 30px 0;
  font-family: ${Common.font.ko};
  text-transform: uppercase;
  li {
    display: inline-block;
    position: relative;
    color: rgba(255, 255, 255, 0.6);
    padding: 3px 6px;
    cursor: pointer;
    &.active {
      color: #fff;
    }
    &:not(:last-of-type)::before {
      content: "";
      position: absolute;
      top: calc(50% + 1px);
      transform: translateY(-50%);
      right: -20px;
      width: 1px;
      height: 10px;
      background: rgba(255, 255, 255, 0.3);
    }
  }

  ${mediaQuery[1]} {
    gap: 20px;
    padding: 20px 0;
    font-size: 14px;
    li {
      &:not(:last-of-type)::before {
        right: -10px;
      }
    }
  }
`;
