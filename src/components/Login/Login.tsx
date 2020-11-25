import React, { ChangeEvent, FC, useState } from "react";
import { useCallback } from "react";
import { logoPng, loginBackground } from "../../assets";
import { requestApi } from "../../lib/api";
import * as S from "./styles";

interface Login {
  email: string;
  password: string;
}

const Login: FC = () => {
  const [loginInfo, setLoginInfo] = useState<Login>({
    email: "",
    password: ""
  });
  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginInfo(prev => ({ ...prev, [name]: value }));
  }, []);

  const login = useCallback(() => {}, []);
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
              <S.LoginInput
                onChange={onChange}
                value={loginInfo.email}
                name="email"
              />
              비밀번호
              <S.LoginInput
                onChange={onChange}
                type="password"
                value={loginInfo.password}
                name="password"
              />
            </S.InptWrap>
          </S.LoginFormHeader>
          <S.LoginFormBody>
            <S.LoginSubmitBtn onClick={login}>로그인</S.LoginSubmitBtn>
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
