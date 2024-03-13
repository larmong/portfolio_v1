import styled from '@emotion/styled';
import { Common, Default } from '@commons/styles/emotion';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 14px;

  .img-wrapper {
    width: 100%;
    cursor: pointer;
    border: 1px solid ${Common.color.lightGray};
  }

  .text-wrapper {
    display: flex;
    flex-direction: column;
    gap: 6px;

    span {
      font-weight: bold;
      color: ${Common.color.darkPoint};
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
      gap: 4px;

      li {
        padding: 2px 5px 3px 5px;
        border: 1px solid ${Default.color};
        border-radius: 6px;
        opacity: 0.3;
      }
    }
  }
`;
