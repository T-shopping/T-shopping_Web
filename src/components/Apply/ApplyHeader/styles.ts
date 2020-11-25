import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
`;

export const Half = styled.div<{ isActive: boolean }>`
  width: 50%;
  height: 100%;
  background-color: #f6f6f6;
  color: #707070;
  display: flex;
  justify-content: center;
  align-items: center;

  ${props =>
    props.isActive &&
    css`
      color: #707070;
      background-color: #ffffff;
    `}
`;
