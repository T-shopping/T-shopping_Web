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

export const Bar = styled.div`
  height: 85%;
  margin-top: 30px;
  background-color: white;
  border-right: 1px solid white;
`;

export const Header = styled.div`
  height: 150px;
  background-color: white;
`;

export const Background = styled.div`
  position: absolute;
  top: 200px;
  width: 800px;
  z-index: -1;
  height: calc(100% - 200px);
  min-height: 750px;
  background-color: #616161;
`;

export const MoreBtn = styled.span`
  cursor: pointer;
`;

export const MoreDiv = styled.div`
  color: #707070;
  font-size: 20px;
  text-align: right;
  width: 100%;
`;

export const ProductWrap = styled.div`
  display: flex;
  flex: 1;
  margin-left: 50px;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
