import styled, { css } from "styled-components";

export const Container = styled.div<{ isActive: boolean }>`
  font-size: 28px;
  width: 230px;
  color: white;
  display: flex;
  margin-top: 15px;
  padding: 12px 6px;
  justify-content: space-evenly;
  margin-right: 30px;

  & div:nth-child(1) {
    font-size: 20px;
    width: 80px;
  }

  > div:nth-child(2) {
    width: 30px;
  }

  & div:nth-child(2) {
    font-size: 17px;
  }

  ${props =>
    props.isActive &&
    css`
      background-color: white;
      color: #707070;
    `}
`;
