import React, { FC } from "react";
import { MoreBtn, MoreDiv } from "../../Main/styles";
import PostItem from "./PostItem/PostItem";
import * as S from "./styles";

export interface BoardItem {
  title: string;
  date: string;
}

interface Props {
  title: string;
  data: BoardItem[];
}

const BoardItem: FC<Props> = ({ title, data }) => {
  return (
    <S.Container>
      <S.Header>
        <span>{title}</span>
        <MoreDiv>
          <MoreBtn>더보기&gt;</MoreBtn>
        </MoreDiv>
      </S.Header>
      <S.Bar />
      <PostItem title={data[0].title} date={data[0].date} />
      <PostItem title={data[1].title} date={data[1].date} />
    </S.Container>
  );
};

export default BoardItem;
