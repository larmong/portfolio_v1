import styled from "@emotion/styled";
import { Common, Default } from "@commons/styles/emotion";

export const Wrapper = styled.div`
  color: ${Common.color.lightGray};
  display: flex;
  flex-direction: column;
`;

export const BoardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 60px 20px;
`;

export const CardWrapper = styled.div`
  width: calc(20% - 16px);
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 80px;
  .ant-pagination-item-link {
    svg {
      filter: invert(99%) sepia(0%) saturate(3085%) hue-rotate(131deg)
        brightness(109%) contrast(100%);
    }
  }
  .ant-pagination-item {
    background: transparent;
    a {
      color: #fff;
    }
  }
  .ant-pagination-item-active {
    border-color: ${Common.color.point};
    a {
      color: ${Common.color.point};
    }
    &:hover {
      border-color: ${Common.color.point};
      a {
        color: ${Common.color.point};
      }
    }
  }
`;
