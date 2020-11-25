import React, { FC } from "react";
import { contentBoxIcon, productPersonIcon } from "../../assets";
import Header from "../../containers/Header/Header";
import Footer from "../Footer/Footer";
import { SuccessBtn } from "../Modal/styles";
import * as S from "./styles";

const ProductDetail: FC = () => {
  return (
    <>
      <Header>전체상품</Header>
      <S.Container>
        <S.Img src="https://s3.ap-northeast-2.amazonaws.com/whitecotton/images/godo/goods/18/12/52/1000003395/1000003395_main_042.jpg" />
        <S.Background>
          <S.ProductName>원목 무드등</S.ProductName>
          <div>
            18,000 원 <S.Point>+ 180원 적립</S.Point>
          </div>
          <S.Hr />
          <div>
            <img src={productPersonIcon} />
            <S.PeopleCount>4 / 5</S.PeopleCount>
            <S.NoticeText>5명 모집중</S.NoticeText>
          </div>
          <div>
            은은한 불빛이 예쁜 원목 무드등 같이 살 사람을 구합니다.
            <br />
            배송비는 제가 낼게요
          </div>
          <S.ButtonWrap>
            <SuccessBtn>신청하기</SuccessBtn>
          </S.ButtonWrap>
        </S.Background>
      </S.Container>
      <Footer />
    </>
  );
};

export default ProductDetail;
