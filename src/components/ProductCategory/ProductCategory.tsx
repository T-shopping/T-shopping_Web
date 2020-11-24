import React, { FC } from "react";
import ProductCategoryItem from "./ProductCategoryItem/ProductCategoryItem";
import * as S from "./styles";

const ProductCategory: FC = () => {
  return (
    <S.Container>
      <S.Title>상품목록</S.Title>
      <S.CategoryList>
        <ProductCategoryItem category="인테리어" num={1} isActive={true} />
        <ProductCategoryItem category="인테리어" num={1} isActive={false} />
        <ProductCategoryItem category="인테리어" num={1} isActive={false} />
        <ProductCategoryItem category="인테리어" num={1} isActive={false} />
        <ProductCategoryItem category="인테리어" num={1} isActive={false} />
        <ProductCategoryItem category="인테리어" num={1} isActive={false} />
        <ProductCategoryItem category="인테리어" num={1} isActive={false} />
        <ProductCategoryItem category="인테리어" num={1} isActive={false} />
        <ProductCategoryItem category="인테리어" num={1} isActive={false} />
      </S.CategoryList>
    </S.Container>
  );
};

export default ProductCategory;
