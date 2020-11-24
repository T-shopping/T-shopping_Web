import React, { FC } from "react";
import { loginBackground, logoPng } from "../../assets";
import { HelpUrl } from "../Login/styles";
import * as S from "./styles";

const Register: FC = () => {
  return (
    <S.Container>
      <S.RegisterModal>
        <S.RegisterImg src={loginBackground} />
        <S.RegisterForm>
          <S.RegisterFormHeader>
            <S.Logowrap>
              <img src={logoPng} />
            </S.Logowrap>
            <S.InputWrap>
              이메일
              <S.RegisterInput />
              비밀번호
              <S.RegisterInput />
              비밀번호 확인
              <S.RegisterInput />
            </S.InputWrap>
          </S.RegisterFormHeader>
          <S.RegisterFormBody>
            <S.RegisterSubmitBtn>다음</S.RegisterSubmitBtn>
            <HelpUrl>
              회원이신가요? <S.LoginText to="/login">로그인</S.LoginText>
            </HelpUrl>
          </S.RegisterFormBody>
        </S.RegisterForm>
        {/* <S.RegisterForm>
          <S.RegisterFormHeader>
            <S.Logowrap>
              <img src={logoPng} />
            </S.Logowrap>
            <S.InputWrap>
              이름
              <S.RegisterInput />
              <S.HalfWrap>
                <div>
                  성별
                  <br />
                  <S.HaflInput />
                </div>
                <div>
                  지번
                  <br />
                  <S.HaflInput />
                </div>
              </S.HalfWrap>
              <S.RegisterInput />
              주소
              <S.RegisterInput />
              전화번호
              <S.RegisterInput />
            </S.InputWrap>
          </S.RegisterFormHeader>
          <S.RegisterFormBody>
            <S.RegisterSubmitBtn>회원가입</S.RegisterSubmitBtn>
          </S.RegisterFormBody>
        </S.RegisterForm> */}
      </S.RegisterModal>
    </S.Container>
  );
};

export default Register;
