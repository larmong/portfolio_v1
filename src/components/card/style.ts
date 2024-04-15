import styled from "@emotion/styled";
import { Common, Default } from "@commons/styles/emotion";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 14px;

  .img-wrapper {
    width: 100%;
    cursor: pointer;
    border: 1px solid ${Default.color};
  }

  .text-wrapper {
    display: flex;
    flex-direction: column;
    gap: 6px;

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
        //padding: 2px 5px 3px 5px;
        // border: 1px solid ${Common.color.gray};
        //border-radius: 6px;
      }
    }
  }
`;
