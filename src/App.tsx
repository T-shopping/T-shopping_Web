import React, { FC } from "react";
import { Switch, BrowserRouter, Route, useHistory } from "react-router-dom";
import { plusBtn } from "./assets";
import {
  LoginContainer,
  MainContainer,
  RegisterContainer,
  BoardWriteContainer,
  ProductContainer,
  ProductDetailContainer,
  ApplyNowContainer,
  ApplyFinishContainer,
  GroupContainer,
  ReviewContainer,
  QaContainer
} from "./containers";
import * as S from "./GlobalStyle";

const App: FC<{}> = () => {
  return (
    <BrowserRouter>
      <S.GlobalStyle />
      <S.Container>
        <Switch>
          <Route exact path="/" component={MainContainer} />
          <Route
            exact
            path="/product/list/:category"
            component={ProductContainer}
          />

          <Route exact path="/qa" component={QaContainer} />
          <Route exact path="/review" component={ReviewContainer} />
          <Route exact path="/group" component={GroupContainer} />
          <Route exact path="/apply/now" component={ApplyNowContainer} />
          <Route exact path="/apply/finish" component={ApplyFinishContainer} />

          <Route exact path="/product/:id" component={ProductDetailContainer} />
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/register" component={RegisterContainer} />
          <Route exact path="/write/post" component={BoardWriteContainer} />
        </Switch>
      </S.Container>
    </BrowserRouter>
  );
};

export default App;
