import styled from "@emotion/styled";
import { Common } from "@commons/styles/emotion";

export const Wrapper = styled.div`
  padding-bottom: 30px;
`;

export const BoardTab = styled.ul`
  display: flex;
  justify-content: center;
  gap: 40px;
  padding: 20px 0;
  border-bottom: 1px solid #ebeae6;
  margin-bottom: 20px;
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
`;
