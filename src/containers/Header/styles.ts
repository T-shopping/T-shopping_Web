import React from "react";
import styled from "styled-components";

export const HeaderWrapper = styled.div`
  background: white;
  height: 150px;
  min-width: 100%;
  display: flex;
  align-items: center;
<<<<<<< Updated upstream
  padding: 0 200px;
  box-sizing: border-box;
`;

=======
  justify-content: center;
  box-sizing: border-box;
`;

export const HeaderContentsWrapper = styled.div`
  display: flex;
  min-width: 1410px;
`;

>>>>>>> Stashed changes
export const HeaderContents = styled.div`
  display: flex;
  margin-right: 225px;
`;

export const LogoImg = styled.img`
  margin-right: 115px;
  transform: translateY(-18px);
`;

export const NavigationWrapper = styled.div`
  white-space: nowrap;
`;

export const Navigation = {
  fontSize: "20px",
  marginRight: "40px",
  color: "#707070",
  cursor: "pointer",
  textDecoration: "none",
  whiteSpace: "nowrap"
} as React.CSSProperties;

export const InputWrapper = styled.div`
  background: #efefef;
  border: 1px solid #f3f3f3;
  border-radius: 17px;
  height: 30px;
  width: 290px;
  min-width: 290px;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  margin-right: 45px;
  transform: translateY(-10px);
`;

export const SearchInput = styled.input`
  background: #efefef;
  border: none;
  width: 80%;
  height: 90%;
  outline: none;
  font-size: 15.5px;
  margin-left: 7px;
`;

interface ButtonProps {
  width: string;
  height: string;
  y: string;
}

export const ButtonWrapper = styled.button<ButtonProps>`
  border: none;
  width: ${props => props.width || "40px"};
  height: ${props => props.height || "40px"};
  outline: none;
  cursor: pointer;
  background: none;
  transform: ${props => (props.y === "-10px" ? "translateY(-10px)" : "none")};
`;
