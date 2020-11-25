import React, { FC } from "react";
import Header from "../../containers/Header/Header";
import { WitdhDiv } from "../../GlobalStyle";
import Footer from "../Footer/Footer";
import ApplyHeder from "./ApplyHeader/ApplyHeader";
import ApplyItem from "./ApplyItem/ApplyItem";
import * as S from "./styles";

const dummy = [
  {
    min: 2,
    max: 5,
    title: "스탠드 조명(아이보리)",
    price: "15,000",
    src:
      "https://mstatic2.e-himart.co.kr/contents/goods/00/00/56/54/13/0000565413__1000013__M_640_640.jpg"
  },
  {
    min: 4,
    max: 8,
    title: "스탠딩 조명 블랙에디션",
    price: "19,900",
    src:
      "https://thumbnail.10x10.co.kr/webimage/image/basic600/252/B002523235.jpg?cmd=thumb&w=400&h=400&fit=true&ws=false"
  }
];

const ApplyNow: FC = () => {
  return (
    <S.Container>
      <Header>장바구니</Header>
      <WitdhDiv width={1400}>
        <ApplyHeder activeIndex={0} />
        <S.ApplyListWrap>
          <ApplyItem
            max={dummy[0].max}
            price={dummy[0].price}
            src={dummy[0].src}
            min={dummy[0].min}
            title={dummy[0].title}
            done={false}
          />
          <ApplyItem
            max={dummy[1].max}
            price={dummy[1].price}
            src={dummy[1].src}
            min={dummy[1].min}
            title={dummy[1].title}
            done={false}
          />
        </S.ApplyListWrap>
      </WitdhDiv>
      <Footer />
    </S.Container>
  );
};

export default ApplyNow;
