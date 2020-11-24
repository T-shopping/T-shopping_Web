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
  padding: 30px 0;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #c9c9c9;
  width: 100%;
`;

export const ProductDesWrapper = styled.div<{ height: string }>`
  display: flex;
  height: ${props => props.height || 0};
  flex-direction: column;
  justify-content: space-between;
`;

export const ProductImg = styled.img`
  width: 220px;
  height: 220px;
  margin-right: 42px;
`;

export const ProductDes = styled.p<{ fontSize: string; color: string }>`
  font-size: ${props => props.fontSize || "18px"};
  color: ${props => props.color || "black"};
  margin: 0;
`;
