import React, { FC } from "react";

import * as S from "./styles";
import * as G from "../../GlobalStyle";

interface Props {
  imgPath: string;
  productName: string;
  productPrice: string;
  productDate: Date;
}

const ProductReview: FC<Props> = props => {
  return (
    <S.Container>
      <G.WitdhDiv
        style={{
          justifyContent: "flex-start",
          padding: 0,
          alignItems: "flex-start",
          minHeight: 0,
          height: 0
        }}
        width={1400}
      >
        <S.Wrapper>
          <S.ProductImg />
          <S.ProductDesWrapper height="125px">
            <S.ProductDesWrapper height="55px">
              <S.ProductDes fontSize="20px" color="black">
                고양이 무드등
              </S.ProductDes>
              <S.ProductDes fontSize="17px" color="black">
                18,000원
              </S.ProductDes>
            </S.ProductDesWrapper>
            <S.ProductDes fontSize="15px" color="#707070">
              2020.11.13
            </S.ProductDes>
          </S.ProductDesWrapper>
        </S.Wrapper>
      </G.WitdhDiv>
    </S.Container>
  );
};

export default ProductReview;
