import styled from "@emotion/styled";
import { mediaQuery } from "@commons/styles/mediaQuery";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 0;
  border-bottom: 1px solid #fff;
  span {
    font-family: "Rajdhani", sans-serif;
    font-size: 60px;
    font-weight: 600;
    color: #fff;
    text-transform: uppercase;
  }

  ${mediaQuery[1]} {
    padding: 20px 0;
    border-bottom: none;
    span {
      font-size: 30px;
    }
  }
`;
