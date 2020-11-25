import styled from "styled-components";

export const Container = styled.div`
  height: 280px;
  padding: 10px 0;
  margin: 0 50px;
  padding-bottom: 0;
  border-bottom: 1px solid #707070;
  display: flex;
  align-items: center;
  color: #2d2d2d;
  font-size: 20px;
  position: relative;
`;

export const ImgWrap = styled.div`
  position: relative;
  &::before {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const Img = styled.img`
  width: 220px;
  height: 220px;
`;

export const Name = styled.div`
  font-size: 24px;
`;

export const X = styled.span`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);

  img {
    width: 50px;
    height: 50px;
  }
`;

export const InfoWrap = styled.div`
  padding-left: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Price = styled.div`
  margin-top: 10px;
`;

export const StatusNum = styled.div`
  color: #707070;
  font-size: 17px;
  margin-top: 50px !important;
`;
