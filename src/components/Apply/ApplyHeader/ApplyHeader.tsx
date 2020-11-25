import React, { FC } from "react";
import { useHistory } from "react-router";
import * as S from "./styles";

interface Props {
  activeIndex: number;
}

const ApplyHeder: FC<Props> = ({ activeIndex }) => {
  const history = useHistory();
  return (
    <S.Container>
      <S.Half
        onClick={() => history.push("/apply/now")}
        isActive={activeIndex === 0}
      >
        인원 모집 완료
      </S.Half>
      <S.Half
        onClick={() => history.push("/apply/finish")}
        isActive={activeIndex === 1}
      >
        인원 모집 중
      </S.Half>
    </S.Container>
  );
};

export default ApplyHeder;
