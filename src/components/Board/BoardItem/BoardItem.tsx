import React, { FC } from "react";
import { MoreBtn, MoreDiv } from "../../Main/styles";
import PostItem from "./PostItem/PostItem";
import * as S from "./styles";

const BoardItem: FC = () => {
  return (
    <S.Container>
      <S.Header>
        <span>제품리뷰</span>
        <MoreDiv>
          <MoreBtn>더보기&gt;</MoreBtn>
        </MoreDiv>
      </S.Header>
      <S.Bar />
      <PostItem />
      <PostItem />
    </S.Container>
  );
};

export default BoardItem;
