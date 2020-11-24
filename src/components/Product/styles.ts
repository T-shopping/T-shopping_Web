import styled from "styled-components";

export const Background = styled.div`
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;
  width: 100%;
  transition: 0.25s all;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.7);
`;

export const PeopleNum = styled.div`
  width: 89px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  font-size: 16px;
  color: white;
  background-color: black;
`;

export const Container = styled.div<{ src: string }>`
  width: 320px;
  height: 451px;
  background: url(${props => props.src}) no-repeat;
  background-size: cover;
  position: relative;
  background-position: center;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & + & {
    margin-left: 30px;
  }
  &:hover {
    ${Background} {
      opacity: 1;
    }
  }
`;
