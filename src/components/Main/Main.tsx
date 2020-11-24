import React, { FC } from "react";
import * as S from "./styles";
import * as G from "../../GlobalStyle";
import ProductItem from "../Product/ProductItem";
import ProductCategory from "../ProductCategory/ProductCategory";

const Main: FC = () => {
  return (
    <S.Container>
      <G.BodyGlobalStyle />
      <S.Background />
      <S.Header />
      <G.WitdhDiv width={1300}>
        <ProductCategory />
        <S.Bar />
        <S.ProductWrap>
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </S.ProductWrap>
      </G.WitdhDiv>
    </S.Container>
  );
};

export default Main;
