import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {

    font-size: 1.6rem;
    background: ${({ theme }) => theme.color.neutral};
    color: ${({ theme }) => theme.color.font};
    text-align: center;
    


  }

  button, input, select, textarea {

    font-size: 1.6rem;
    border: none;
}

  button:hover {
    filter: brightness(0.9);
    cursor: pointer;
  }


`