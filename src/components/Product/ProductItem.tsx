import React, { FC } from "react";
import * as S from "./styles";

interface Props {
  src: string;
  now: number;
  max: number;
  name: string;
  price: string;
}

const ProductItem: FC<Props> = ({ max, now, src, name, price }) => {
  return (
    <S.Container src={src}>
      <S.Background>
        <S.PeopleNum>
          {now} / {max}
        </S.PeopleNum>
        <S.Detail>
          <div>{name}</div>
          <S.Bar />
          <div>
            {price}
            <S.Price> 원</S.Price>
          </div>
        </S.Detail>
      </S.Background>
    </S.Container>
  );
};

export default ProductItem;
