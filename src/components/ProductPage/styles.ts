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
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  float: right;
  width: 1150px;
  z-index: -1;
  min-height: 680px;
  background-color: #dadada;
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

export const BodyWrapper = styled.div`
  width: 100%;
  height: 900px;
  position: relative;
  z-index: 10;
`;

export const ProductImg = styled.img`
  width: 490px;
  height: 550px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: -23%;
`;

export const ProductDesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 105px;
  left: 300px;
  height: 330px;
`;

export const ProductDes = styled.p<{ fontSize: string; color: string }>`
  font-size: ${props => props.fontSize || "18px"};
  color: ${props => props.color || "black"};
  margin: 0;
`;

export const ProductLine = styled.hr`
  width: 450px;
  height: 1px;
  background: #8b8b8b;
  border: none;
`;

export const IconImg = styled.img`
  width: 31px;
  height: 35px;
`;

export const DesWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 210px;
  justify-content: space-between;
`;

export const SubButton = styled.button`
  cursor: pointer;
  background: #acacac;
  color: white;
  font-size: 17px;
  font-weight: 300;
  width: 100px;
  height: 35px;
  position: absolute;
  border: none;
  outline: none;
  bottom: -180px;
  right: 0;
  &:hover {
    background: #5aa1ff;
  }
  z-index: 100;
`;
