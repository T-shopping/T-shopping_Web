import styled from "styled-components";
import { MoreDiv } from "../../Main/styles";

export const Container = styled.div`
  width: 600px;
  height: 450px;
  background-color: white;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.25);
  transform: translateY(-50%);
  box-sizing: border-box;
  padding: 40px;
  font-size: 28px;

  ${MoreDiv} {
    width: unset !important;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Bar = styled.div`
  margin-bottom: 15px;
  height: 2px;
  width: 100%;
  background-color: #858585;
`;
