import React, { FC } from "react";
import { groupImg, king } from "../../../assets";
import { FailBtn } from "../../Modal/styles";
import * as S from "./styles";

interface Props {
  name: string;
  owner: string;
  text: string;
}

const GroupItem: FC<Props> = ({ name, owner, text }) => {
  return (
    <S.Container>
      <img src={groupImg} />
      <span>{name} 그룹</span>
      <S.Background>
        <S.Info>
          <img src={king} />
          {owner}
          <S.Bar />
          <div>{text}</div>
          <S.ButtonWrap>
            <FailBtn>탈퇴하기</FailBtn>
          </S.ButtonWrap>
        </S.Info>
      </S.Background>
    </S.Container>
  );
};

export default GroupItem;
