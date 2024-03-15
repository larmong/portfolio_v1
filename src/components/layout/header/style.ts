import styled from '@emotion/styled';
import { Common } from '@commons/styles/emotion';

export const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: 120px;
  z-index: 10;
  background: url('/assets/images/noise-background.jpg') top center / cover no-repeat;
  display: flex;
  flex-direction: column;

  h1 {
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      cursor: pointer;
      width: 120px;
    }
  }
`;

export const Gnb = styled.ul`
  height: 50px;
  border-top: 1px solid #ebeae6;
  border-bottom: 1px solid #ebeae6;
  display: flex;
  gap: 30px;
  color: #fff;
  font-size: 18px;

  li {
    padding: 0 14px;
    display: flex;
    align-items: center;
    height: 100%;
    text-transform: uppercase;
    cursor: pointer;
    font-weight: 500;

    &:last-of-type {
      margin-left: auto;
    }

    &.active {
      color: ${Common.color.point};
    }
  }
`;
