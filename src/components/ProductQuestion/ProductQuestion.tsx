import React, { FC } from "react";

import * as S from "./styles";
import * as G from "../../GlobalStyle";

interface Props {
  quesName: string;
  quesDate: Date;
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
          <S.ProductDesWrapper height="73px">
            <S.ProductDes fontSize="20px" color="black">
              고양이 무드등
            </S.ProductDes>
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
