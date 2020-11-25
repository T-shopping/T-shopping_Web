import styled, { css } from "styled-components";

export const Container = styled.div`
  min-height: calc(100vh - 150px);
  background-color: #f3f3f3;
`;

export const ReviewHeader = styled.div`
  display: flex;
  color: #2d2d2d;
  justify-content: space-between;
  padding: 30px 0;
  border-bottom: 2px solid #858585;
`;

export const Title = styled.div`
  font-size: 28px;
`;

export const Type = styled.span<{ isActive: boolean }>`
  font-size: 20px;
  cursor: pointer;
  ${props =>
    props.isActive &&
    css`
      color: #5aa1ff;
    `}

  & + & {
    margin-left: 10px;
  }
`;

export const ReviewWrap = styled.div`
  padding: 20px 0;
`;
