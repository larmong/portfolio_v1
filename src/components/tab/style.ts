import styled from '@emotion/styled';
import { IsLengthType } from '@components/tab/type';

export const Wrapper = styled.div`
  font-family: 'Rajdhani', sans-serif;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 80px 0;
  h3 {
    position: relative;
    font-size: 100px;
    text-transform: uppercase;
    padding-bottom: 70px;
    color: transparent;
    -webkit-text-stroke: 1px #fff;
    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 50%;
      width: 140px;
      height: 100px;
      background: url('/assets/images/detail.png') center center / contain no-repeat;
    }
  }
`;

export const TabWrapper = styled.ul`
  width: 70%;
  height: 100%;
  display: flex;
  gap: 50px;
  li {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: ${(props: IsLengthType) => `calc(100% / ${Number(props.isLength)})`};
    color: #fff;
    line-height: 26px;
    padding: 20px 0;
    cursor: pointer;
    p {
      font-weight: bold;
      font-size: 20px;
    }
    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      top: 0;
      left: 0;
      background: #fff;
      opacity: 0.2;
    }
    &::after {
      transition: width 0.4s ease;
      width: 0;
      opacity: 1;
    }
    &:hover {
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 1px;
        top: 0;
        left: 0;
        background: #fff;
      }
    }
    &.active {
      &::after {
        width: 100%;
        background: #fff;
      }
    }
  }
`;
