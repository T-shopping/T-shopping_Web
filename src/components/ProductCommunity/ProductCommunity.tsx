import React, { FC } from "react";
import * as S from "./styles";
import * as G from "../../GlobalStyle";
import ProductReview from "../ProductReview/ProductReview";
import ProductQuestion from "../ProductQuestion/ProductQuestion";
import { NavLink, Route } from "react-router-dom";

const ProductCommunity: FC = () => {
  return (
    <S.Container>
      <G.BodyGlobalStyle />
      <S.Header />
      <G.WitdhDiv width={1400} style={{ alignItems: "flex-start", padding: 0 }}>
        <S.Wrapper>
          <S.TitleWrapper marginTop="50px" line="1px" bottom="18px">
            <S.Title fontSize="26px">제품리뷰</S.Title>
            <S.TitleWrapper marginTop="0" line="0" bottom="0">
              <NavLink
                activeStyle={{ color: "#5AA1FF" }}
                style={S.Navigation}
                to="/review/hello"
              >
                제품리뷰
              </NavLink>
              <NavLink
                activeStyle={{ color: "#5AA1FF" }}
                style={S.Navigation}
                to="/review/ques"
              >
                문의사항
              </NavLink>
            </S.TitleWrapper>
          </S.TitleWrapper>
          <Route path="/review/hello" component={list} />
          <Route path="/review/ques" component={questions} />
        </S.Wrapper>
      </G.WitdhDiv>
    </S.Container>
  );
};

const list = () => {
  return (
    <ProductReview
      imgPath="asd"
      productDate={new Date()}
      productName="zxc"
      productPrice="asd"
    />
  );
};

const questions = () => {
  return (
    <>
      <ProductQuestion quesName="asd" quesDate={new Date()} />
    </>
  );
};

export default ProductCommunity;
