import React, { FC } from "react";
import * as S from "../styles";

const WriteModal: FC = () => {
  return (
    <S.Background>
      <S.Modal>
        문의 사항 작성을 취소할까요?
        <S.BtnWrap>
          <S.SuccessBtn>네</S.SuccessBtn>
          <S.FailBtn>아니오</S.FailBtn>
        </S.BtnWrap>
      </S.Modal>
    </S.Background>
  );
};

export default WriteModal;
