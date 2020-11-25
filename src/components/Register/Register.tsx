import React, { ChangeEvent, FC } from "react";
import { useCallback } from "react";
import { useState } from "react";
import { loginBackground, logoPng } from "../../assets";
import { requestApi } from "../../lib/api";
import { HelpUrl } from "../Login/styles";
import * as S from "./styles";

interface Register {
  email: string;
  password: string;
  passwordRe: string;
}

const Register: FC = () => {
  const [registerInfo, setRegisterInfo] = useState<Register>({
    email: "",
    password: "",
    passwordRe: ""
  });

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterInfo(prev => ({ ...prev, [name]: value }));
  }, []);

  const register = useCallback(() => {
    const { email, password, passwordRe } = registerInfo;
    if (!email || !password || !passwordRe) {
      alert("빈칸을 채워주세요");
      return;
    }
    if (password !== passwordRe) {
      alert("비밀번호와 재입력이 다릅니다");
      return;
    }
    requestApi("post", "/api/auth/register", {
      email,
      password
    })
      .then(res => {
        alert("계정이 생성되었습니다");
      })
      .catch(() => {
        alert("이미 있습니다");
      });
  }, [registerInfo]);

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
              <S.RegisterInput
                type="email"
                onChange={onChange}
                name="email"
                value={registerInfo.email}
              />
              비밀번호
              <S.RegisterInput
                type="password"
                onChange={onChange}
                name="password"
                value={registerInfo.password}
              />
              비밀번호 확인
              <S.RegisterInput
                type="password"
                onChange={onChange}
                name="passwordRe"
                value={registerInfo.passwordRe}
              />
            </S.InputWrap>
          </S.RegisterFormHeader>
          <S.RegisterFormBody>
            <S.RegisterSubmitBtn onClick={register}>다음</S.RegisterSubmitBtn>
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
