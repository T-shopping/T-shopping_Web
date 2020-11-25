import React, { FC } from "react";
import * as S from "./styles";

interface Props {
  title: string;
  date: string;
}

const QaItem: FC<Props> = ({ date, title }) => {
  return (
    <S.QaItemDiv>
      <S.Title>{title}</S.Title>
      <S.Date>{date}</S.Date>
    </S.QaItemDiv>
  );
};

export default QaItem;
