import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const HeaderWrapper = styled.div`
  background: white;
  height: 150px;
  min-width: 100%;

  > div {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
  }
`;
export const NavLink = styled(Link)<{ isActive: boolean }>`
  font-size: 20px;
  margin-right: 40px;
  color: #707070;
  cursor: pointer;
  text-decoration: none;
  white-space: nowrap;
  ${props =>
    props.isActive &&
    css`
      color: #5aa1ff;
    `};
`;

export const RightWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderContents = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoImg = styled.img`
  margin-right: 115px;
`;

export const NavigationWrapper = styled.div`
  white-space: nowrap;
`;

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
`;
