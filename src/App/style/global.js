import styled, {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Sora', sans-serif;
    text-decoration: none;
    appearance: none;
    width: 100%;

    @media (max-width: 450px) {
      margin: 0;
      padding: 0;
    }
  }
`