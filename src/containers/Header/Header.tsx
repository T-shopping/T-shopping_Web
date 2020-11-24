import React, { FC } from "react";
import { NavLink, BrowserRouter } from "react-router-dom";
import * as S from "./styles";
import searchIcon from "../../assets/searchIcon.png";
import logo from "../../assets/logo.png";
import profileIcon from "../../assets/topbarProfileIcon.png";

const Header = () => {
  return (
    <>
      <BrowserRouter>
        <S.HeaderWrapper>
          <S.HeaderContents>
            <S.LogoImg src={logo} />
            <S.NavigationWrapper>
              <NavLink
                exact
                to="/"
                activeStyle={{ color: "#4f4fcc" }}
                style={S.Navigation}
              >
                전체상품
              </NavLink>
              <NavLink
                to="/a"
                activeStyle={{ color: "#4f4fcc" }}
                style={S.Navigation}
              >
                장바구니
              </NavLink>
              <NavLink
                to="/s"
                activeStyle={{ color: "#4f4fcc" }}
                style={S.Navigation}
              >
                그룹관리
              </NavLink>
              <NavLink
                to="/xzc"
                activeStyle={{ color: "#4f4fcc" }}
                style={S.Navigation}
              >
                커뮤니티
              </NavLink>
            </S.NavigationWrapper>
          </S.HeaderContents>
          <S.InputWrapper>
            <S.SearchInput />
            <S.ButtonWrapper width="40px" height="40px" y="0">
              <img src={searchIcon} />
            </S.ButtonWrapper>
          </S.InputWrapper>
          <S.ButtonWrapper width="50px" height="50px" y="-10px">
            <img src={profileIcon} />
          </S.ButtonWrapper>
        </S.HeaderWrapper>
      </BrowserRouter>
    </>
  );
};

export default Header;
