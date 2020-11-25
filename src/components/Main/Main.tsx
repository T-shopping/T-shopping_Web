import React, { FC } from "react";
import * as S from "./styles";
import * as G from "../../GlobalStyle";
import ProductItem from "../Product/ProductItem";
import ProductCategory from "../ProductCategory/ProductCategory";
import Header from "../../containers/Header/Header";
import GroupItem from "../Group/GroupItem/GroupItem";
import Footer from "../Footer/Footer";
import BoardItem from "../Board/BoardItem/BoardItem";

const date = [
  {
    title: "고양이 무드등 리뷰",
    date: "2020.11.25"
  },
  {
    title: "원목 무드등 리뷰",
    date: "2020.11.25"
  }
];

const date2 = [
  {
    title: "입금했는데 물건이 오지 않습니다.",
    date: "2020.11.24"
  },
  {
    title: "로그아웃이 되지 않습니다.",
    date: "2020.11.24"
  }
];

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
              <ProductItem
                now={2}
                max={5}
                name="사각 무드등"
                price="12,900"
                src="https://lightingworld.kr/web/product/medium/201903/64f9dac9bf442e6900154c428656f921.jpg"
              />
              <ProductItem
                now={1}
                max={3}
                name="고양이 무드등"
                price="18,000"
                src="https://thumbnail.10x10.co.kr/webimage/image/basic600/147/B001474895-3.jpg?cmd=thumb&w=400&h=400&fit=true&ws=false"
              />
              <ProductItem
                now={2}
                max={4}
                name="원목 모드등"
                price="9,900"
                src="https://s3.ap-northeast-2.amazonaws.com/whitecotton/images/godo/goods/18/12/52/1000003395/1000003395_main_042.jpg"
              />
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
            <GroupItem name="쇼핑" />
            <GroupItem name="대소고" />
            <GroupItem name="광소고" />
          </S.GroupWrap>
        </S.MyGroupWrap>
      </S.GroupContainer>
      <S.BlankHeight />
      <S.PlusFooter>
        <G.WitdhDiv width={1400}>
          <BoardItem title="제품 리뷰" data={date} />
          <BoardItem title="문의사항" data={date2} />
        </G.WitdhDiv>
      </S.PlusFooter>
      <Footer />
    </div>
  );
};

export default Main;
