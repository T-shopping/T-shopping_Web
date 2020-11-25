import styled from "styled-components";

export const Num = styled.span`
  margin-left: 10px;
`;

export const PeopleNum = styled.div`
  top: 0;
  left: 0;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 90px;
  color: white;
  height: 45px;
`;

export const Background = styled.div`
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;
  width: 100%;
  transition: 0.25s all;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: rgba(0, 0, 0, 0.7);
`;

export const Detail = styled.div`
  margin-left: 20px;
  margin-bottom: 20px;
  font-size: 20px;
  color: white;
`;

export const Bar = styled.div`
  width: 50px;
  height: 1px;
  background-color: white;
  margin: 20px 0;
`;

export const Price = styled.span`
  font-size: 16px;
  color: #707070;
`;

export const Container = styled.div<{ src: string }>`
  width: 403px;
  height: 572px;
  position: relative;

  background: url(${props => props.src}) no-repeat;
  background-size: cover;
  background-position: center;

  margin-top: 60px;
  &:nth-child(1),
  &:nth-child(2),
  &:nth-child(3) {
    margin-top: 0;
  }

  &:hover {
    ${Background} {
      opacity: 1;
    }
  }
`;
