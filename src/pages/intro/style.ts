import styled from "@emotion/styled";

export const Wrapper = styled.div``
export const IntroCont = styled.div`
  display: flex;
  justify-content: space-between;
  height: calc(100vh - 180px);
  border-bottom: 1px solid #ebeae6;

  .left {
    width: 45%;
    display: flex;
    justify-content: center;
    overflow: hidden;
    height: 100%;
    background: url("/assets/images/main.png") top center / cover no-repeat;
  }

  .right {
    width: 55%;
    padding-left: 24px;
    color: #fff;

    .intro-title {
      display: flex;
      justify-content: space-between;
      font-size: 50px;
      font-weight: 600;
      padding: 40px 0;
      border-bottom: 1px solid #ebeae6;
    }

    .intro-link {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 40px 0;
      border-bottom: 1px solid #ebeae6;

      > div {
        display: flex;
        flex-direction: column;
        gap: 10px;
        text-transform: uppercase;

        span {
          position: relative;
          display: inline-block;
        }
      }

      > div:first-of-type {
        span {
          padding-left: 20px;

          &::before {
            content: "#";
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
          }
        }
      }

      > div:last-of-type {
        gap: 15px;
        text-align: right;
        font-weight: bold;
      }
    }

    .intro-name {
      height: calc(100% - 456px);
    }

    .intro-dsc {
      font-family: 'Chosunilbo_myungjo', sans-serif;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 10px;
      padding: 40px 0;
      border-top: 1px solid #ebeae6;

      span {
        opacity: 0;
      }
    }
  }
`
