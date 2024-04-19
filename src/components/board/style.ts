import styled from "@emotion/styled";
import { Common } from "@commons/styles/emotion";
import { mediaQuery } from "@commons/styles/mediaQuery";

export const Wrapper = styled.div`
  color: ${Common.color.lightGray};
  display: flex;
  flex-direction: column;
`;

export const BoardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 60px 20px;
  ${mediaQuery[1]} {
    gap: 40px 20px;
  }
`;

export const CardWrapper = styled.div`
  width: calc(20% - 16px);

  ${mediaQuery[0]} {
    width: calc(33.33% - 14px);
  }
  ${mediaQuery[1]} {
    width: calc(33.33% - 14px);
  }
  ${mediaQuery[2]} {
    width: 100%;
  }
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
  ${mediaQuery[1]} {
    padding-top: 40px;
  }
`;
