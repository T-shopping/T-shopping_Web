import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Container = styled.div`
  background-color: #f3f3f3;
  padding: 60px 0;
  min-height: calc(100vh - 150px);
  box-sizing: border-box;
`;

export const ProductHeader = styled.div`
  display: flex;
  margin-bottom: 20px;
  justify-content: space-between;
`;
export const ActiveCategory = styled.span`
  font-size: 28px;
`;

export const Category = styled(Link)<{ isActive: boolean }>`
  font-size: 18px;
  text-decoration: none;
  color: unset;
  ${props =>
    props.isActive &&
    css`
      color: #5aa1ff;
    `}

  & + & {
    margin-left: 10px;
  }
`;

export const CategoryWrap = styled.div`
  color: #707070;
`;

export const ProductBody = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
