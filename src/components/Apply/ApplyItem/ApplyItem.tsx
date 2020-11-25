import React, { FC } from "react";
import { useState } from "react";
import { contentBoxIcon, X } from "../../../assets";
import WriteModal from "../../Modal/WriteModal/WriteModal";
import { Num, PeopleNum } from "../../ProductItem/styles";
import * as S from "./styles";

export interface ApplyItem {
  title: string;
  price: string;
  src: string;
  date: string;
}

const ApplyItem: FC<ApplyItem> = ({ src, title, price, date }) => {
  return (
    <S.Container>
      <S.ImgWrap>
        <S.Img src={src} />
      </S.ImgWrap>
      <S.InfoWrap>
        <S.Name>{title}</S.Name>
        <S.Price>{price}원</S.Price>
        <S.StatusNum>{date}</S.StatusNum>
      </S.InfoWrap>
    </S.Container>
  );
};

export default ApplyItem;
