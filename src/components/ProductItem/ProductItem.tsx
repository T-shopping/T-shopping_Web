import React, { FC } from "react";
import { useCallback } from "react";
import { useHistory } from "react-router";
import { contentBoxIcon } from "../../assets";
import * as S from "./styles";

interface Props {
  src: string;
  now: number;
  max: number;
  name: string;
  price: string;
}

const ProductItem: FC<Props> = ({ max, now, src, name, price }) => {
  const history = useHistory();
  const onClick = useCallback(() => {
    history.push("/product/1");
  }, []);
  return (
    <S.Container onClick={onClick} src={src}>
      <S.Background>
        <S.PeopleNum>
          <img src={contentBoxIcon} />
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
