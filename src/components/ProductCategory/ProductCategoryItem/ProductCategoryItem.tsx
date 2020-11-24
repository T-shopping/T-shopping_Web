import React, { FC } from "react";
import * as S from "./styles";

interface Props {
  category: string;
  num: number;
  isActive: boolean;
}

const ProductCategoryItem: FC<Props> = ({ category, num, isActive }) => {
  return (
    <S.Container isActive={isActive}>
      <div>{category}</div>
      <div>{num}</div>
    </S.Container>
  );
};

export default ProductCategoryItem;
