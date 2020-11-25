import styled from "styled-components";

export const Container = styled.div`
  min-height: calc(100vh - 150px);
  background-color: #f3f3f3;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.div<{ src: string }>`
  width: 490px;
  height: 500px;
  z-index: 2;
  transform: translateX(-250px);

  background: url(${props => props.src}) no-repeat;
  background-size: cover;
  background-position: center;
`;

export const Background = styled.div`
  width: 1152px;
  position: absolute;
  right: 0;
  height: 700px;
  display: flex;
  box-sizing: border-box;
  padding-left: 250px;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(196, 196, 196, 0.54);
  color: #2d2d2d;
  font-size: 20px;

  > div {
    margin: 20px 0;
    display: flex;
    align-items: center;
  }
`;

export const Hr = styled.div`
  width: 50%;
  background-color: #707070;
  height: 1px;
`;

export const PeopleCount = styled.div`
  font-size: 24px;
`;

export const NoticeText = styled.span`
  color: #707070;
  margin-left: 10px;
`;

export const Point = styled.span`
  color: #707070;
  font-size: 16px;
`;

export const ProductName = styled.div`
  font-size: 24px;
`;

export const ButtonWrap = styled.div`
  position: absolute;
  bottom: 80px;
  left: 52%;

  button {
    font-size: 16px;
    width: 100px;
    height: 40px;
  }
`;
