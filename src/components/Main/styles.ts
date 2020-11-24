import styled from "styled-components";
import * as G from "../../GlobalStyle";

export const Container = styled.div`
  > ${G.WitdhDiv} {
    height: calc(100vh - 150px);
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 100px;
    min-height: 800px;
    box-sizing: border-box;
  }

  height: 100vh;
  width: 100%;

  min-width: 1800px;
  min-height: 900px;
`;

export const RightContent = styled.div`
  flex: 1;
`;
export const Bar = styled.div`
  height: 85%;
  margin-right: 30px;
  margin-top: 30px;
  background-color: white;
  border-right: 1px solid white;
`;

export const Header = styled.div`
  height: 150px;
  background-color: white;
`;

export const Background = styled.div`
  position: absolute;
  top: 200px;
  width: 800px;
  z-index: -1;
  height: calc(100% - 200px);
  min-height: 750px;
  background-color: #616161;
`;

export const MoreBtn = styled.span`
  cursor: pointer;
`;

export const MoreDiv = styled.div`
  color: #707070;
  font-size: 20px;
  text-align: right;
  width: 100%;
  margin-bottom: 20px;
`;

export const GroupWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
`;

export const SubBackground = styled.div`
  flex: 1;
  width: 100%;
`;

export const BackgroundTop = styled(SubBackground)``;
export const BackgroundBottom = styled(SubBackground)`
  background: linear-gradient(#e4e4e4, white);
`;

export const MyGroupHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const GroupName = styled.span`
  font-size: 28px;
`;

export const MyGroupWrap = styled.div`
  width: 70%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  padding: 90px;
  background-color: white;
  box-sizing: border-box;

  ${MoreDiv} {
    width: unset !important;
  }
`;
export const BlankHeight = styled.div`
  height: 250px;
  width: 100%;
  background-color: white;
`;

export const ProductWrap = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const PlusFooter = styled.div`
  height: 200px;
  background-color: #515151;

  > div {
    display: flex;
    justify-content: space-between;
  }
`;

export const GroupContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;
