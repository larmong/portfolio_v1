import { css } from "@emotion/react";
import { Common, Default } from "./emotion";
import { mediaQuery } from "@commons/styles/mediaQuery";

export const GlobalStyle = css`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;600;700&family=Rubik+Mono+One&display=swap");

  @font-face {
    font-family: "Montserrat", sans-serif;
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/Chosunilbo_myungjo.woff")
      format("woff");
  }
  @font-face {
    font-family: "Chosunilbo_myungjo";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/Chosunilbo_myungjo.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    ::-webkit-scrollbar {
      width: 0;
      background: transparent;
    }

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  html {
    background: url("/assets/images/noise-background.jpg") top center / cover
      no-repeat;
  }

  body {
    font-family: ${Default.font};
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    color: ${Common.color.lightGray};
  }

  em,
  i {
    font-style: normal;
  }

  ul,
  li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  button {
    border: 0;
    cursor: pointer;
    background: #fff;
  }

  button,
  input,
  textarea {
    border: ${Default.border};
  }

  button:focus,
  input:focus,
  textarea:focus {
    outline: none;
  }

  .container {
    width: 1400px;
    margin: 0 auto;
    ${mediaQuery[0]} {
      width: 100%;
      padding: 0 20px;
    }
  }
  .display-pc {
    display: block;
    ${mediaQuery[1]} {
      display: none;
    }
  }
  .display-m {
    display: none;
    ${mediaQuery[1]} {
      display: block;
    }
  }
`;
