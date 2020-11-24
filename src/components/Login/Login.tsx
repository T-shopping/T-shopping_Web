import React, { FC } from "react";
import { logoPng, loginBackground } from "../../assets";
import * as S from "./styles";

const Login: FC = () => {
  return (
    <S.Container>
      <S.LoginModla>
        <S.LoginImg src={loginBackground} />
        <S.LoginForm>
          <S.LoginFormHeader>
            <S.LogoWrap>
              <img src={logoPng} />
            </S.LogoWrap>
            <S.InptWrap>
              아이디
              <S.LoginInput />
              비밀번호
              <S.LoginInput />
            </S.InptWrap>
          </S.LoginFormHeader>
          <S.LoginFormBody>
            <S.LoginSubmitBtn>로그인</S.LoginSubmitBtn>
            <S.HelpUrl>
              회원이 아니신가요?
              <S.RegisterText to="/register">회원가입</S.RegisterText>
            </S.HelpUrl>
          </S.LoginFormBody>
        </S.LoginForm>
      </S.LoginModla>
    </S.Container>
  );
};

export default Login;
