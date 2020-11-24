import React, { FC } from "react";
import * as S from "./styles";
import * as G from "../../GlobalStyle";
import { NavLink, Route } from "react-router-dom";
import ProductListItem from "../ProductListItem/ProductListItem";

const ProductList: FC = () => {
  return (
    <>
      <S.Container>
        <G.BodyGlobalStyle />
        <S.Header />
        <G.WitdhDiv width={1400}>
          <S.Wrapper>
            <S.HeadWrapper>
              <S.Head fontSize="25px" color="black">
                인테리어
              </S.Head>
              <S.NaviWrapper>
                <NavLink
                  to="/list/inte"
                  activeStyle={{ color: "#5AA1FF" }}
                  style={S.Navigation}
                >
                  인테리어
                </NavLink>
                <NavLink
                  to="/list/sik"
                  activeStyle={{ color: "#5AA1FF" }}
                  style={S.Navigation}
                >
                  식품
                </NavLink>
                <NavLink
                  to="/list/ga"
                  activeStyle={{ color: "#5AA1FF" }}
                  style={S.Navigation}
                >
                  가구
                </NavLink>
                <NavLink
                  to="/list/do"
                  activeStyle={{ color: "#5AA1FF" }}
                  style={S.Navigation}
                >
                  도서
                </NavLink>
                <NavLink
                  to="/list/sang"
                  activeStyle={{ color: "#5AA1FF" }}
                  style={S.Navigation}
                >
                  생필품
                </NavLink>
                <NavLink
                  to="/list/bu"
                  activeStyle={{ color: "#5AA1FF" }}
                  style={S.Navigation}
                >
                  뷰티
                </NavLink>
                <NavLink
                  to="/list/gaj"
                  activeStyle={{ color: "#5AA1FF" }}
                  style={S.Navigation}
                >
                  가전
                </NavLink>
                <NavLink
                  to="/list/moon"
                  activeStyle={{ color: "#5AA1FF" }}
                  style={S.Navigation}
                >
                  문구
                </NavLink>
                <NavLink
                  to="/list/jang"
                  activeStyle={{ color: "#5AA1FF" }}
                  style={S.Navigation}
                >
                  장난감
                </NavLink>
              </S.NaviWrapper>
            </S.HeadWrapper>
            <S.BodyWrapper>
              <Route path="/list/inte" component={list} />
            </S.BodyWrapper>
          </S.Wrapper>
        </G.WitdhDiv>
      </S.Container>
    </>
  );
};

const list = () => {
  const list = ["asd", "asd", "asd"];
  return (
    <>
      {list.map(() => (
        <ProductListItem />
      ))}
    </>
  );
};

export default ProductList;
