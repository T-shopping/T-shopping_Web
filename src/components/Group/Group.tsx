import React, { FC } from "react";
import Header from "../../containers/Header/Header";
import { WitdhDiv } from "../../GlobalStyle";
import Footer from "../Footer/Footer";
import GroupItem from "./GroupItem/GroupItem";
import * as S from "./styles";

const Group: FC = () => {
  return (
    <div>
      <Header>그룹관리</Header>
      <S.Container>
        <WitdhDiv width={1400}>
          <S.Title>나의 그룹</S.Title>
          <div>
            <GroupItem
              name="쇼핑"
              owner="공영길"
              text="가구나 옷 등 공동 구매할 사람 배송비는 제가 냅니다 :)"
            />
            <GroupItem
              name="대소고"
              owner="양승빈"
              text="싸게 구매해서 싸게 가져요"
            />
            <GroupItem
              name="소마고"
              owner="이지수"
              text="공동구매 너무 좋아요"
            />
          </div>
        </WitdhDiv>
      </S.Container>
      <Footer />
    </div>
  );
};

export default Group;
