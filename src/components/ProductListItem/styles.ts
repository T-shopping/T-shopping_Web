import styled from "styled-components";

export const AllWrap = styled.div`
  width: calc(33.3% - 37px);
  box-sizing: border-box;

  &:nth-child(3n + 2) {
    margin: 0 56.2px;
  }
`;

export const BlackScreen = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  z-index: 10;
  background: rgba(0, 0, 0, 0);
  transition: all 0.25s linear;
  display: flex;
  align-items: flex-end;
`;

export const ProductDesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: opacity 0.25s linear;
  opacity: 0;
  margin-left: 26px;
  margin-bottom: 10px;
`;

export const Wrapper = styled.div<{ imgPath: string }>`
  height: 630px;
  width: 100%;
  margin: 20px 0;
  position: relative;
  background-image: url(${props => props.imgPath || null});
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 1;
  &:hover {
    ${BlackScreen} {
      background: rgba(0, 0, 0, 0.3);
    }
    ${ProductDesWrapper} {
      opacity: 1;
    }
  }
`;

export const TopBox = styled.div`
  width: 93px;
  height: 45px;
  display: flex;
  justify-content: center;
  background: black;
  align-items: center;
`;

export const TopBoxTitle = styled.p`
  color: white;
  font-size: 17px;
`;

export const TopBoxIcon = styled.img`
  width: 17px;
  height: auto;
  margin-right: 7px;
`;

export const ProductDes = styled.p<{ fontSize: string }>`
  font-size: ${props => props.fontSize || "18px"};
  color: white;
`;

export const ProductLine = styled.hr`
  width: 50px;
  height: 1px;
  background: white;
  border: none;
  margin: 0;
`;
