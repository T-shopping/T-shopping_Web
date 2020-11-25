import React, { FC } from "react";
import Header from "../../containers/Header/Header";
import { WitdhDiv } from "../../GlobalStyle";
import Footer from "../Footer/Footer";
import ApplyHeder from "./ApplyHeader/ApplyHeader";
import ApplyItem from "./ApplyItem/ApplyItem";
import * as S from "./styles";

const dummy = [
  {
    src: "https://image.auction.co.kr/itemimage/18/82/8b/18828b16c6.jpg",
    min: 5,
    max: 10,
    title: "1인용 소파",
    price: "209,000"
  },
  {
    src: "https://image.auction.co.kr/itemimage/18/8b/30/188b306526.jpg",
    min: 4,
    max: 9,
    title: "2인용 소파",
    price: "89,000"
  }
];

const ApplyFinish: FC = () => {
  return (
    <S.Container>
      <Header>장바구니</Header>
      <WitdhDiv width={1400}>
        <ApplyHeder activeIndex={1} />
        <S.ApplyListWrap>
          <ApplyItem
            done={true}
            price={dummy[0].price}
            max={dummy[0].max}
            min={dummy[0].min}
            title={dummy[0].title}
            src={dummy[0].src}
          />
          <ApplyItem
            done={true}
            price={dummy[1].price}
            max={dummy[1].max}
            min={dummy[1].min}
            title={dummy[1].title}
            src={dummy[1].src}
          />
        </S.ApplyListWrap>
      </WitdhDiv>
      <Footer />
    </S.Container>
  );
};

export default ApplyFinish;
