import styled from "styled-components";
import * as G from "../../GlobalStyle";

export const Container = styled.div`
  ${G.WitdhDiv} {
    height: calc(100vh - 150px);
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 100px;
    min-height: 800px;
    box-sizing: border-box;
  }
`;

export const Wrapper = styled.div`
  padding: 52px 0;
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #c9c9c9;
`;

export const ProductDesWrapper = styled.div<{ height: string }>`
  display: flex;
  height: ${props => props.height || 0};
  flex-direction: column;
  justify-content: space-between;
`;

export const ProductDes = styled.p<{ fontSize: string; color: string }>`
  font-size: ${props => props.fontSize || "18px"};
  color: ${props => props.color || "black"};
  margin: 0;
`;
