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

export const Header = styled.div`
  height: 150px;
  background-color: white;
`;

interface TitleProps {
  marginTop: string;
  line: string;
  bottom: string;
}

export const TitleWrapper = styled.div<TitleProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${props => props.marginTop || 0};
  border-bottom: ${props => props.line || 0} solid black;
  padding-bottom: ${props => props.bottom || 0};
`;

export const Title = styled.p<{ fontSize: string }>`
  font-size: ${props => props.fontSize || "18px"};
  margin: 0;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NavigationWrapper = styled.div`
  white-space: nowrap;
`;

export const Navigation = {
  fontSize: "20px",
  color: "#707070",
  cursor: "pointer",
  marginLeft: "20px",
  textDecoration: "none",
  whiteSpace: "nowrap"
} as React.CSSProperties;
