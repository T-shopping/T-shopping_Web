import React, { FC } from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import { ShoppingBasket,Main, ProductPage,ProductCommunity } from "./components";
import {
  LoginContainer,
  MainContainer,
  RegisterContainer,
  BoardWriteContainer
} from "./containers";
import * as S from "./GlobalStyle";

const App: FC<{}> = () => {
  return (
    <BrowserRouter>
      <S.GlobalStyle />
      <S.Container>
        <Switch>
          <Route path="/product" component={ProductPage} />
          <Route path="/review" component={ProductCommunity} />
          <Route path="/shop" component={ShoppingBasket} />
          <Route exact path="/" component={MainContainer} />
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/register" component={RegisterContainer} />
          <Route exact path="/write" component={BoardWriteContainer} />
        </Switch>
      </S.Container>
    </BrowserRouter>
  );
};

export default App;
