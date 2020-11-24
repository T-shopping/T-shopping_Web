import React, { FC } from "react";
import { WitdhDiv } from "../../GlobalStyle";
import * as S from "./styles";

const Footer: FC = () => {
  return (
    <S.Container>
      <WitdhDiv width={1400}>
        <p>
          주로 1+1, 2+1과 같이 저렴하거나 세일 중일 경우에는 학생들끼리 공동
          구매를 하곤 합니다.
        </p>
        <p>
          T-shopping은 공동 구매를 하기 위해 그룹을 만들거나 그룹원을 추가하는
          등 공동 구매를 목적으로 기획하게 되었습니다.
        </p>
      </WitdhDiv>
    </S.Container>
  );
};

export default Footer;
