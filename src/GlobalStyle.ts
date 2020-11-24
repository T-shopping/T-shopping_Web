import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        margin:0;
        padding:0;
    }

    * {
        font-family: 'NanumSquare';
        font-weight:bold;
    }
`;

export const BodyGlobalStyle = createGlobalStyle`
    body {
        background-color:#f3f3f3;
    }
`;

export const Container = styled.div`
  min-width: 1900px;
  width: 100%;

  min-height: 950px;
  height: 100%;
`;

export const WitdhDiv = styled.div<{ width: number }>`
  width: ${props => props.width}px;
  margin: 0 auto;
`;
