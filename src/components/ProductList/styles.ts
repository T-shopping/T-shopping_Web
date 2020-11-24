import styled from "styled-components";
import * as G from "../../GlobalStyle";
import React from "react";

export const Container = styled.div`
  ${G.WitdhDiv} {
    height: calc(100vh - 150px);
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 100px;
    box-sizing: border-box;
  }
`;

export const Header = styled.div`
  height: 150px;
  background-color: white;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 100px 0;
`;

export const HeadWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Head = styled.p<{ fontSize: string; color: string }>`
  font-size: ${props => props.fontSize || "18px"};
  color: ${props => props.color || "black"};
  margin: 0;
`;

export const NaviWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const Navigation = {
  fontSize: "17px",
  marginLeft: "15px",
  color: "#707070",
  cursor: "pointer",
  textDecoration: "none",
  whiteSpace: "nowrap"
} as React.CSSProperties;

export const BodyWrapper = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  flex-wrap: wrap;
`;
