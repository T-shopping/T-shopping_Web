import React, { FC } from "react";
import { NavLink, BrowserRouter, Link } from "react-router-dom";
import * as S from "./styles";
import searchIcon from "../../assets/searchIcon.png";
import logo from "../../assets/logo.png";
import profileIcon from "../../assets/topbarProfileIcon.png";
import { WitdhDiv } from "../../GlobalStyle";

interface NavItem {
  name: string;
  url: string;
}

const navStaic: NavItem[] = [
  {
    name: "전체상품",
    url: "/product/list/interior"
  },
  {
    name: "장바구니",
    url: "/apply/now"
  },
  {
    name: "그룹관리",
    url: "/group"
  },
  {
    name: "커뮤니티",
    url: "/review"
  }
];

const Header: FC = ({ children }) => {
  return (
    <S.HeaderWrapper>
      <WitdhDiv width={1400}>
        <S.HeaderContents>
          <Link to="/">
            <S.LogoImg src={logo} />
          </Link>
          <S.NavigationWrapper>
            {navStaic.map(({ name, url }) => (
              <S.NavLink to={url} isActive={name === children}>
                {name}
              </S.NavLink>
            ))}
          </S.NavigationWrapper>
        </S.HeaderContents>
        <S.RightWrap>
          <S.InputWrapper>
            <S.SearchInput />
            <S.ButtonWrapper width="40px" height="40px" y="0">
              <img src={searchIcon} />
            </S.ButtonWrapper>
          </S.InputWrapper>
          <S.ButtonWrapper width="50px" height="50px" y="-10px">
            <img src={profileIcon} />
          </S.ButtonWrapper>
        </S.RightWrap>
      </WitdhDiv>
    </S.HeaderWrapper>
  );
};

export default Header;
