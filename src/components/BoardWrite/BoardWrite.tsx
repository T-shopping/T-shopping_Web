import React, { FC } from "react";
import { useState } from "react";
import Header from "../../containers/Header/Header";
import { WitdhDiv } from "../../GlobalStyle";
import Footer from "../Footer/Footer";
import WriteModal from "../Modal/WriteModal/WriteModal";
import useBlobUrl from "use-blob-url";
import * as S from "./styles";
import { X } from "../../assets";

const BoardWrite: FC = () => {
  const [state, setState] = useState<boolean>(false);
  return (
    <>
      <S.Container>
        <Header />
        <S.WriteWrap>
          <WitdhDiv width={800}>
            <S.Title>문의사항 작성</S.Title>
            <S.WriteForm>
              <S.X>
                <img src={X} onClick={() => setState(true)} />
              </S.X>
              <S.FormContent>
                <div>제목</div>
                <S.WriteInput />
                {/* <S.FlexWrap>
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
                </S.FlexWrap> */}
                <div>문의 내용</div>
                <S.WriteInput />
              </S.FormContent>
              <S.Button>작성</S.Button>
            </S.WriteForm>
          </WitdhDiv>
        </S.WriteWrap>
      </S.Container>
      <Footer />
      {state && <WriteModal />}
    </>
  );
};

export default BoardWrite;
