import React, { FC } from "react";
import Header from "../../containers/Header/Header";
import { WitdhDiv } from "../../GlobalStyle";
import Footer from "../Footer/Footer";
import * as S from "./styles";

const BoardWrite: FC = () => {
  return (
    <>
      <S.Container>
        <Header />
        <S.WriteWrap>
          <WitdhDiv width={800}>
            <S.Title>게시물 작성</S.Title>
            <S.WriteForm>
              <S.WriteImg />
              <S.FormContent>
                <div>상품명</div>
                <S.WriteInput />
                <S.FlexWrap>
                  <S.InputWrapper flex={4}>
                    <div>가격</div>
                    <S.WriteInput />
                  </S.InputWrapper>
                  <S.InputWrapper flex={3}>
                    <div>모집인원</div>
                    <S.WriteInput />
                  </S.InputWrapper>
                  <S.InputWrapper flex={4}>
                    <div>상품종류</div>
                    <S.WriteInput />
                  </S.InputWrapper>
                </S.FlexWrap>
                <div>제품설명</div>
                <S.WriteInput />
              </S.FormContent>
              <S.Button>작성</S.Button>
            </S.WriteForm>
          </WitdhDiv>
        </S.WriteWrap>
      </S.Container>
      <Footer />
    </>
  );
};

export default BoardWrite;
