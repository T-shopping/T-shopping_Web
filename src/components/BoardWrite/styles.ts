import styled, { css } from "styled-components";
import { WitdhDiv, WriteBtn } from "../../GlobalStyle";

export const Container = styled.div`
  width: 100%;
`;

export const WriteWrap = styled.div`
  height: calc(100vh - 430px);
  background-color: #f3f3f3;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > ${WitdhDiv} {
    width: 800px !important;
  }
  > div:nth-child(1) {
    width: 100%;
    text-align: left;
  }
`;

export const Title = styled.div`
  font-size: 30px;
`;

export const WriteInput = styled.div<{ flex?: number }>`
  margin-top: 30px;
  width: 100%;
  border-bottom: 2px solid #c4c4c4;
  margin-bottom: 10px;

  ${props =>
    props.flex &&
    css`
    flex:${props.flex}
    }
  `}
`;

export const FlexWrap = styled.div`
  display: flex; ;
`;

export const InputWrapper = styled.div<{ flex: number }>`
  flex: ${props => props.flex};

  & + & {
    margin-left: 10px;
  }
`;
export const FormContent = styled.div`
  flex: 1;
  padding-left: 30px;
  color: #707070;
`;

export const WriteImg = styled.div`
  width: 250px;
  height: 250px;
  background-color: #c4c4c4;
`;

export const WriteForm = styled.div`
  width: 800px !important;
  display: flex;
  height: 430px;
  padding: 40px;
  position: relative;
  margin-top: 20px;
  box-sizing: border-box;
  background-color: white;
`;

export const Button = styled(WriteBtn)`
  position: absolute;
  bottom: 30px;
  right: 30px;
`;
