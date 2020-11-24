import styled from "styled-components";
import * as LC from "../Login/styles";

export const Container = styled(LC.Container)``;
export const RegisterModal = styled(LC.LoginModla)``;
export const RegisterImg = styled(LC.LoginImg)``;
export const RegisterForm = styled(LC.LoginForm)``;
export const RegisterFormHeader = styled(LC.LoginFormHeader)``;
export const RegisterSubmitBtn = styled(LC.LoginSubmitBtn)``;
export const RegisterFormBody = styled(LC.LoginFormBody)``;
export const Logowrap = styled(LC.LogoWrap)``;
export const InputWrap = styled(LC.InptWrap)`
  display: flex;
  margin-top: 10px;
`;
export const HalfWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const HaflInput = styled(LC.LoginInput)`
  width: 205px;
`;
export const RegisterInput = styled(LC.LoginInput)`
  margin-bottom: 3px;

  &:last-child {
    margin-bottom: 20px;
  }
`;
export const LoginText = styled(LC.RegisterText)``;
