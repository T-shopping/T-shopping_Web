import React, { FC } from "react";
import Header from "../../containers/Header/Header";
import { WitdhDiv } from "../../GlobalStyle";
import Footer from "../Footer/Footer";
import CommunityHeader from "../Review/CommunityHeader";
import QaItem from "./QaItem";
import * as S from "./styles";

const Qa: FC = () => {
  return (
    <div>
      <Header>커뮤니티</Header>
      <S.Container>
        <WitdhDiv width={1400}>
          <CommunityHeader activeStr="문의사항" />
          <S.QaList>
            <QaItem title="입금했는데 물건이 오지 않습니다" date="2020.11.21" />
            <QaItem title="로그아웃이 되지 않습니다" date="2020.11.24" />
            <QaItem title="환불 요청 부탁드립니다" date="2020.11.22" />
          </S.QaList>
        </WitdhDiv>
      </S.Container>
      <Footer />
    </div>
  );
};

export default Qa;
