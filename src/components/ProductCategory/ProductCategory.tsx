import React, { FC } from "react";
import ProductCategoryItem from "./ProductCategoryItem/ProductCategoryItem";
import * as S from "./styles";

const ProductCategory: FC = () => {
  return (
    <S.Container>
      <S.Title>상품목록</S.Title>
      <S.CategoryList>
        <ProductCategoryItem category="인테리어" num={31} isActive={true} />
        <ProductCategoryItem category="식품" num={12} isActive={false} />
        <ProductCategoryItem category="가구" num={10} isActive={false} />
        <ProductCategoryItem category="도서" num={15} isActive={false} />
        <ProductCategoryItem category="생필품" num={27} isActive={false} />
        <ProductCategoryItem category="뷰티" num={27} isActive={false} />
        <ProductCategoryItem category="가전" num={27} isActive={false} />
        <ProductCategoryItem category="문구" num={14} isActive={false} />
        <ProductCategoryItem category="장난감" num={43} isActive={false} />
      </S.CategoryList>
    </S.Container>
  );
};

export default ProductCategory;
