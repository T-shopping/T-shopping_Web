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

export const GlobalInput = styled.input`
  padding: 10px;
  color: #707070;
  box-sizing: border-box;
  border: 2px solid #c4c4c4;
`;

export const WriteBtn = styled.button`
  width: 100px;
  height: 45px;
  background-color: #c4c4c4;
  border: none;
  color: white;
  font-size: 20px;
  transition: 0.25s all;

  &:hover {
    background-color: #5aa1ff;
  }
`;

export const SubMitBtn = styled.button`
  background-color: #5aa1ff;
  border: none;
  color: white;
`;
