import styled from "@emotion/styled";
import { Common } from "@commons/styles/emotion";
import { mediaQuery } from "@commons/styles/mediaQuery";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  font-size: 14px;
  .img-wrapper {
    transition: all 0.2s ease;
    width: 100%;
    cursor: pointer;
    border: 1px solid ${Common.color.lightGray};
  }
  .text-wrapper {
    display: flex;
    flex-direction: column;
    gap: 8px;
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
      i {
        cursor: pointer;
      }
    }
    ul {
      margin-top: 10px;
      display: flex;
      gap: 6px;
      align-items: center;
      li {
        color: ${Common.color.gray};
      }
    }
  }

  ${mediaQuery[1]} {
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: 12px;
    .text-wrapper {
      gap: 6px;
      p {
        font-size: 14px;
      }
      ul {
        margin-top: 4px;
        gap: 4px;
      }
    }
  }
`;
