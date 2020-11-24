import React, { FC } from "react";
import * as S from "./styles";
import * as G from "../../GlobalStyle";
import { NavLink, Route } from "react-router-dom";
import ShoppingItem from "../ShoppingItem/ShoppingItem";

const Main: FC = () => {
  return (
    <S.Container>
      <G.BodyGlobalStyle />
      <S.Header />
      <G.WitdhDiv width={1400} style={{ padding: 0, alignItems: "flex-start" }}>
        <S.Wrapper>
          <S.NaviWrapper>
            <NavLink
              to="/shop/comple"
              style={S.Navigation}
              activeStyle={{ color: "black", background: "white" }}
            >
              <S.NaviTitle fontSize="22px">인원 모집 완료</S.NaviTitle>
            </NavLink>
            <NavLink
              to="/shop/ing"
              style={S.Navigation}
              activeStyle={{ color: "black", background: "white" }}
            >
              <S.NaviTitle fontSize="22px">인원 모집 중</S.NaviTitle>
            </NavLink>
          </S.NaviWrapper>
          <S.Body>
            <Route path="/shop/comple" component={ShoppingItem} />
            <Route path="/shop/ing" component={ShoppingItem} />
          </S.Body>
        </S.Wrapper>
      </G.WitdhDiv>
    </S.Container>
  );
};

export default Main;
