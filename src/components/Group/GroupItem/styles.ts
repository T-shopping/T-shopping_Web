import styled from "styled-components";

export const Background = styled.div`
  position: absolute;
  width: 100%;
  box-sizing: border-box;
  height: 100%;
  padding-top: 100px;
  padding-left: 20px;
  background-color: rgba(0, 0, 0, 0.7);
  transition: 0.25s all;
  opacity: 0;
`;

export const Info = styled.div`
  color: white;
  font-size: 20px;

  img {
    width: 26px !important;
    height: auto !important;
    margin-right: 10px;
  }

  div {
    font-size: 16px;
    width: 55%;
  }
`;

export const ButtonWrap = styled.div`
  position: absolute;
  bottom: 20px;
  right: -60px;

  > button {
    margin: 0;
    width: 100px;
    height: 40px;
    font-size: 16px;
  }
`;

export const Bar = styled.div`
  height: 1px;
  width: 50px;
  margin: 20px 0;
  background-color: white;
`;

export const Container = styled.div`
  width: 330px;
  height: 450px;
  background-color: #5aa1ff;
  display: flex;
  position: relative;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  & + & {
    margin-left: 40px;
  }

  img {
    width: 201px;
    height: 180px;
  }

  span {
    color: white;
    font-size: 20px;
    transform: translateY(60px);
  }

  &:hover {
    ${Background} {
      opacity: 1;
    }
  }
`;
