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
  width: 100%;
  margin-top: 30px;
`;

export const Header = styled.div`
  height: 150px;
  background-color: white;
`;

export const Navigation = {
  fontSize: "20px",
  color: "#707070",
  cursor: "pointer",
  textDecoration: "none",
  whiteSpace: "nowrap",
  background: "#f6f6f6",
  display: "flex",
  justifyContent: "center",
  width: "50%",
  height: "100%",
  alignItems: "center"
} as React.CSSProperties;

export const NaviTitle = styled.p<{ fontSize: string }>`
  font-size: ${props => props.fontSize || "18px"};
`;

export const NaviWrapper = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
`;

export const Navi = styled.div``;

export const Body = styled.div`
  background: white;
  width: 100%;
  height: 1000px;
  margin-bottom: 100px;
`;
