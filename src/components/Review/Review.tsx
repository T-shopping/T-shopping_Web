import React, { FC } from "react";
import Header from "../../containers/Header/Header";
import { WitdhDiv } from "../../GlobalStyle";
import ApplyItem from "../Apply/ApplyItem/ApplyItem";
import Footer from "../Footer/Footer";
import CommunityHeader from "./CommunityHeader";
import * as S from "./styles";

const Review: FC = () => {
  return (
    <div>
      <Header>커뮤니티</Header>
      <S.Container>
        <WitdhDiv width={1400}>
          <CommunityHeader activeStr="제품리뷰" />
          <S.ReviewWrap>
            <ApplyItem
              src="https://thumbnail.10x10.co.kr/webimage/image/basic600/147/B001474895-3.jpg?cmd=thumb&w=400&h=400&fit=true&ws=false"
              title="고양이 무드등"
              price="18,000"
              date="2020.11.23"
            />
            <ApplyItem
              title="원목 무드등"
              price="19,000"
              date="2020.11.20"
              src="https://s3.ap-northeast-2.amazonaws.com/whitecotton/images/godo/goods/18/12/52/1000003395/1000003395_main_042.jpg"
            />
          </S.ReviewWrap>
        </WitdhDiv>
      </S.Container>
      <Footer />
    </div>
  );
};

export default Review;
