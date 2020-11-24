import React, { FC } from "react";
import { groupImg } from "../../../assets";
import * as S from "./styles";

const GroupItem: FC = () => {
  return (
    <S.Container>
      <img src={groupImg} />
      <span>쇼핑 그룹</span>
    </S.Container>
  );
};

export default GroupItem;
