import styled from "styled-components";

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 5;
`;

export const Modal = styled.div`
  width: 700px;
  height: 300px;
  background-color: white;
  position: relative;
  font-size: 30px;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const BasicBtn = styled.button`
  width: 150px;
  height: 70px;
  border: none;
  display: flex;
  justify-content: center;
  background-color: #c4c4c4;
  align-items: center;
  transition: 0.25s all;
  font-size: 32px;
  color: white;

  & + & {
    margin-left: 20px;
  }
`;

export const BtnWrap = styled.div`
  position: absolute;
  bottom: 20px;
  display: flex;
  right: 30px;
  & + & {
    margin-left: 20px;
  }
`;

export const SuccessBtn = styled(BasicBtn)`
  &:hover {
    background-color: #5aa1ff;
  }
`;
export const FailBtn = styled(BasicBtn)`
  &:hover {
    background-color: #dc4747;
  }
`;
