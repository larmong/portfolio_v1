import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const Page = styled.div`
  padding-top: 120px;
  background: url('/assets/images/noise-background.jpg') top center / cover no-repeat;

  section {
    display: block;
    min-height: calc(100vh - 170px);
    height: calc(100% - 50px);
  }

  footer {
    opacity: 0.8;
    color: #fff;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
  }
`;
