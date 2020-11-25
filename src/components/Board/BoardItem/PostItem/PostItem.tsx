import React, { FC } from "react";
import { BoardItem } from "../BoardItem";
import * as S from "./styles";

const PostItem: FC<BoardItem> = ({ title, date }) => {
  return (
    <S.Container>
      <S.PostTitle>{title}</S.PostTitle>
      <S.PostTitle>{date}</S.PostTitle>
    </S.Container>
  );
};

export default PostItem;
