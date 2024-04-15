import styled from "@emotion/styled";
import { Common } from "@commons/styles/emotion";

export const Wrapper = styled.div`
  color: ${Common.color.lightGray};
`;
export const TopCont = styled.div`
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  gap: 80px;
`;
export const Hand = styled.div`
  margin-left: -80px;
  margin-bottom: 30px;
  .wave {
    font-size: 8rem;
    display: inline-block;
    animation: wave 1000ms infinite alternate ease-in-out;
    transform-origin: 75% 80%;
  }

  @keyframes wave {
    from {
      transform: rotate(-10deg);
    }
    to {
      transform: rotate(30deg);
    }
  }
`;
export const Title = styled.div`
  font-size: 2.2em;
  text-align: center;
  font-weight: bold;
  span {
    display: block;
    font-size: 3em;
    background-image: linear-gradient(160deg, #ffcc60 0%, #ff5c00 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
export const List = styled.ul`
  font-family: ${Common.font.ko};
  display: flex;
  flex-direction: column;
  gap: 30px;
  font-size: 1.4em;
  margin: 0 auto;
  li {
    line-height: 32px;
    display: flex;
    align-items: center;
    svg {
      margin-right: 20px;
    }
  }
`;

export const ProfileWrapper = styled.div`
  border-top: 1px solid rgb(235, 234, 230);
  border-bottom: 1px solid rgb(235, 234, 230);
  padding: 100px 0;
  display: flex;
`;
export const ProfileCont = styled.div`
  padding: 100px 0;
  text-align: center;
  font-size: 1.2em;
  width: calc(33.33% - 15px);
  display: flex;
  flex-direction: column;
  gap: 40px;
  h5 {
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 2.6em;
    text-transform: uppercase;
    color: #ffaf59;
    background-image: linear-gradient(160deg, #ffcc60 0%, #ff5c00 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 14px;
    li {
      span {
        display: block;
        font-weight: bold;
        font-size: 1.2em;
      }
      em {
        display: inline-block;
        margin-right: 5px;
        font-weight: bold;
      }
    }
  }
`;

export const StacksWrapper = styled.div`
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  h5 {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 3em;
    text-transform: uppercase;
    color: #ffaf59;
    background-image: linear-gradient(160deg, #ffcc60 0%, #ff5c00 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  span {
    opacity: 0.8;
    display: inline-block;
    font-size: 1em;
    margin-bottom: 100px;
  }
`;
export const StacksContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Stacks = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  h6 {
    display: block;
    font-weight: bold;
    font-size: 2em;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 14px;
    li {
      display: inline-block;
      margin-right: 5px;
      font-weight: bold;
    }
  }
`;
