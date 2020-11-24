import { Link } from "react-router-dom";
import styled from "styled-components";
import { GlobalInput, SubMitBtn } from "../../GlobalStyle";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  min-width: 1900px;
  min-height: 900px;

  display: flex;

  justify-content: center;
  align-items: center;
  background-color: #f3f3f3;
`;

export const LoginModla = styled.div`
  width: 1200px;
  background-color: white;
  height: 600px;
  display: flex;
`;

export const LoginImg = styled.div<{ src: string }>`
  width: 500px;
  height: 600px;

  background: url(${props => props.src}) no-repeat;
  background-size: cover;
  background-position: center;
`;
export const InptWrap = styled.div`
  display: flex;
  margin-top: 30px;
  flex-direction: column;
`;

export const LoginForm = styled.div`
  padding-top: 50px;
  padding-bottom: 100px;
  font-size: 20px;
  color: #707070;
  display: flex;
  align-items: center;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;

export const LoginInput = styled(GlobalInput)`
  width: 430px;
  font-size: 17px;
  margin-bottom: 20px;
`;
export const LogoWrap = styled.div`
  text-align: center;
`;
export const LoginFormHeader = styled.div``;
export const LoginFormBody = styled.div``;
export const LoginSubmitBtn = styled(SubMitBtn)`
  width: 430px;
  font-size: 20px;
  padding: 20px 0;
`;
export const HelpUrl = styled.div`
  font-size: 17px;
`;

export const RegisterText = styled(Link)`
  color: #5aa1ff;
  text-decoration: none;
`;
