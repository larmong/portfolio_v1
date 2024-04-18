import styled from "@emotion/styled";
import { Common } from "@commons/styles/emotion";
import { IsModalType } from "@components/modal/type";

export const Wrapper = styled.div`
  transition: all 0.8s ease;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: ${(props: IsModalType) => (props.isModal ? "1000" : "-1")};
  background: #fff;
`;
// background: ${(props: IsModalType) =>
//   props.isModal ? "rgba(255, 255, 255, 0.25)" : "rgba(255, 255, 255, 0)"};

export const ModalWrapper = styled.div`
  transition: transform 0.8s ease;
  display: flex;
  flex-direction: column;
  gap: 30px;
  position: fixed;
  top: 0;
  right: 0;
  width: 700px;
  height: 100vh;
  padding: 30px;
  background: url("/assets/images/noise-background.jpg") top center / cover
    no-repeat;
  transform: ${(props: IsModalType) =>
    props.isModal ? "translateX(0px)" : "translateX(700px)"};

  .top-cont {
    display: flex;
    justify-content: space-between;
  }
`;

export const TitleWrapper = styled.div`
  width: calc(100% - 80px);
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
    color: ${Common.color.lightGray};
  }
`;

export const CloseBtn = styled.div`
  margin-top: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  cursor: pointer;
  border: 1px solid ${Common.color.lightGray};
  padding-bottom: 1px;
  svg {
    width: 25px;
    height: 25px;
    color: ${Common.color.lightGray};
  }
`;

export const ImgBox = styled.div`
  width: 100%;
  height: 400px;
`;

export const TagGroup = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 30px;
`;

export const BtnGroup = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  height: 40px;
  margin-top: 30px;
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 100%;
    color: ${Common.color.lightGray};
    border: 1px solid ${Common.color.lightGray};
    cursor: pointer;
    span {
      display: inline-block;
      margin-left: 5px;
    }
  }
`;

export const TextCont = styled.div`
  // border: 1px solid ${Common.color.lightGray};
  height: calc(100vh - 685px);
  overflow: hidden;
  color: ${Common.color.lightGray};
  font-family: ${Common.font.ko};
  line-height: 26px;
  overflow-y: auto;
  padding: 10px 14px;
`;
