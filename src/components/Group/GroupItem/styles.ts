import styled from "styled-components";

export const Container = styled.div`
  width: 330px;
  height: 450px;
  background-color: #5aa1ff;
  display: flex;
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
`;
