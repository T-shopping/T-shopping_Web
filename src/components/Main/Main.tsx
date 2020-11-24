import React, { FC } from "react";
import * as S from "./styles";
import * as G from "../../GlobalStyle";
import ProductItem from "../Product/ProductItem";
import ProductCategory from "../ProductCategory/ProductCategory";
import Header from "../../containers/Header/Header";
import GroupItem from "../Group/GroupItem/GroupItem";
import Footer from "../Footer/Footer";
import BoardItem from "../Board/BoardItem/BoardItem";

const Main: FC = () => {
  return (
    <div>
      <S.Container>
        <G.BodyGlobalStyle />
        <S.Background />
        <Header />
        <G.WitdhDiv width={1400}>
          <ProductCategory />
          <S.Bar />
          <S.RightContent>
            <S.MoreDiv>
              <S.MoreBtn>더보기&gt;</S.MoreBtn>
            </S.MoreDiv>
            <S.ProductWrap>
              <ProductItem />
              <ProductItem />
              <ProductItem />
            </S.ProductWrap>
          </S.RightContent>
        </G.WitdhDiv>
      </S.Container>
      <S.GroupContainer>
        <S.BackgroundTop />
        <S.BackgroundBottom />
        <S.MyGroupWrap>
          <S.MyGroupHeader>
            <S.GroupName>나의 그룹</S.GroupName>
            <S.MoreDiv>
              <S.MoreBtn>더보기&gt;</S.MoreBtn>
            </S.MoreDiv>
          </S.MyGroupHeader>
          <S.GroupWrap>
            <GroupItem />
            <GroupItem />
            <GroupItem />
          </S.GroupWrap>
        </S.MyGroupWrap>
      </S.GroupContainer>
      <S.BlankHeight />
      <S.PlusFooter>
        <G.WitdhDiv width={1400}>
          <BoardItem />
          <BoardItem />
        </G.WitdhDiv>
      </S.PlusFooter>
      <Footer />
    </div>
  );
};

export default Main;
