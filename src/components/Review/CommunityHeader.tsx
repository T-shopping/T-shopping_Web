import React, { FC } from "react";
import { useHistory } from "react-router";
import * as S from "./styles";

interface Props {
  activeStr: string;
}

const CommunityHeader: FC<Props> = ({ activeStr }) => {
  const history = useHistory();
  return (
    <S.ReviewHeader>
      <S.Title>{activeStr}</S.Title>
      <div>
        <S.Type
          onClick={() => history.push("/review")}
          isActive={activeStr === "제품리뷰"}
        >
          제품리뷰
        </S.Type>
        <S.Type
          onClick={() => history.push("/qa")}
          isActive={activeStr === "문의사항"}
        >
          문의사항
        </S.Type>
      </div>
    </S.ReviewHeader>
  );
};

export default CommunityHeader;
