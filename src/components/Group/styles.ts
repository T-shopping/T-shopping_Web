import styled from "styled-components";
import { WitdhDiv } from "../../GlobalStyle";

export const Title = styled.div`
  font-size: 20px;
  margin-bottom: 20px;
`;

export const Container = styled.div`
  height: calc(100vh - 150px);
  background-color: #f3f3f3;
  display: flex;
  justify-content: center;
  align-items: center;

  ${WitdhDiv} > div {
    display: flex;
    justify-content: space-between;
  }
`;

export const GroupHeader = styled.div``;
