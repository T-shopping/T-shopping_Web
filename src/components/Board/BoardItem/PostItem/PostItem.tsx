import React, { FC } from "react";
import * as S from "./styles";

const PostItem: FC = () => {
  return (
    <S.Container>
      <S.PostTitle>고양이 무드등 리뷰</S.PostTitle>
      <S.PostTitle>2020.11.23</S.PostTitle>
    </S.Container>
  );
};

export default PostItem;
