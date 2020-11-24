import React, { FC } from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import { Main, ProductPage } from "./components";
import * as S from "./GlobalStyle";

const App: FC<{}> = () => {
  return (
    <BrowserRouter>
      <S.GlobalStyle />
      <S.Container>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/product" component={ProductPage} />
        </Switch>
      </S.Container>
    </BrowserRouter>
  );
};

export default App;
