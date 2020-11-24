import React, { FC } from "react";
import * as S from "./styles";
import * as G from "../../GlobalStyle";
import TopIcon from "../../assets/contentBoxIcon.png";

/* interface Props {
  productName: string;
  productPrice: string;
  imgPath: string;
} */

const ProductListItem: FC /*<Props>*/ = () => {
  return (
    <S.AllWrap>
      <S.Wrapper imgPath="https://preview.redd.it/t6w12lq7asw51.png?auto=webp&s=ecea83026da6ea13ed3d5a598b86f3a3315ee674">
        <S.BlackScreen>
          <S.ProductDesWrapper>
            <S.ProductDes fontSize="22px">원목 무드등</S.ProductDes>
            <S.ProductLine />
            <S.ProductDes fontSize="18px">18,000 원</S.ProductDes>
          </S.ProductDesWrapper>
        </S.BlackScreen>
        <S.TopBox>
          <S.TopBoxIcon src={TopIcon} />
          <S.TopBoxTitle>2 / 5</S.TopBoxTitle>
        </S.TopBox>
      </S.Wrapper>
    </S.AllWrap>
  );
};

export default ProductListItem;
