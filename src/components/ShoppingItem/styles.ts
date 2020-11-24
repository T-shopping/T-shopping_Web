import styled from "styled-components";

export const CartImg = styled.div<{ imgPath: string }>`
  width: 220px;
  height: 220px;
  background-image: ${props => props.imgPath || null};
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  border: 1px solid black;
  margin-right: 40px;
`;

export const ImgTopBox = styled.div`
  background: black;
  width: 90px;
  height: 43px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BoxIcon = styled.img`
  width: 19px;
  height: 21px;
  margin-right: 8px;
`;

export const BoxTitle = styled.p`
  color: white;
  font-size: 14px;
`;

export const CartDes = styled.p<{ fontSize: string; color: string }>`
  font-size: ${props => props.fontSize || "18px"};
  color: ${props => props.color || "black"};
  margin: 0;
`;

export const CartDesWrapper = styled.div<{ padding: string; height: string }>`
  height: ${props => props.height || 0};
  padding: ${props => props.padding || 0} 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 60px 0;
  margin: 0 75px;
  box-sizing: border-box;
  display: flex;
  border-bottom: 1px solid #707070;
`;
