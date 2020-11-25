import React, { FC } from "react";
import Header from "../../containers/Header/Header";
import { WitdhDiv } from "../../GlobalStyle";
import Footer from "../Footer/Footer";
import ProductItem from "../ProductItem/ProductItem";
import * as S from "./styles";

const max = [
  {
    src:
      "https://s3.ap-northeast-2.amazonaws.com/whitecotton/images/godo/goods/18/12/52/1000003395/1000003395_main_042.jpg",
    now: 1,
    max: 6,
    name: "원목 무드등",
    price: "9,900"
  },
  {
    src:
      "https://th3.tmon.kr/thumbs/image/fed/564/7a0/e9d0c2fe6_700x700_95_FIT_1549865550.jpg",
    now: 3,
    max: 4,
    name: "달빚 무드등",
    price: "13,500"
  },
  {
    src: "https://m.nemone.co.kr/web/product/big/201804/3731_shop1_324453.jpg",
    now: 2,
    max: 3,
    name: "푸른달 무드등",
    price: "11,000"
  },
  {
    src:
      "https://img.insight.co.kr/static/2019/07/21/700/x74mj02957d153z6j3ep.jpg",
    now: 1,
    max: 4,
    name: "진주 조개 무드등",
    price: "9,300"
  },
  {
    src:
      "https://img2.tmon.kr/cdn3/deals/2020/01/28/3014579922/3014579922_front_d38846b36c.jpg",
    now: 7,
    max: 9,
    name: "원목 식탁",
    price: "89,000"
  },
  {
    src:
      "https://jayeonmiin.com/web/product/big/202009/46d70e956eddc368b134beeab69f9477.jpg",
    now: 5,
    max: 10,
    name: "사각 원목테이블",
    price: "169,000"
  }
];

const ProductPage: FC = () => {
  return (
    <>
      <Header>전체상품</Header>
      <S.Container>
        <WitdhDiv width={1400}>
          <S.ProductHeader>
            <S.ActiveCategory>인테리어</S.ActiveCategory>
            <S.CategoryWrap>
              <S.Category to="/product/list/interior" isActive={true}>
                인테리어
              </S.Category>
              <S.Category to="/product/list/food" isActive={false}>
                식품
              </S.Category>
              <S.Category to="/product/list/furniture" isActive={false}>
                가구
              </S.Category>
              <S.Category to="/product/list/book" isActive={false}>
                도서
              </S.Category>
              <S.Category to="/product/list/necessity" isActive={false}>
                생필품
              </S.Category>
              <S.Category to="/product/list/beauty" isActive={false}>
                뷰티
              </S.Category>
              <S.Category to="/product/list/electronic" isActive={false}>
                가전
              </S.Category>
              <S.Category to="/product/list/phrases" isActive={false}>
                문구
              </S.Category>
              <S.Category to="/product/list/toy" isActive={false}>
                장난감
              </S.Category>
            </S.CategoryWrap>
          </S.ProductHeader>
          <S.ProductBody>
            {max.map(({ max, name, now, price, src }) => (
              <ProductItem
                max={max}
                name={name}
                now={now}
                price={price}
                src={src}
              />
            ))}
          </S.ProductBody>
        </WitdhDiv>
      </S.Container>
      <Footer />
    </>
  );
};

export default ProductPage;
