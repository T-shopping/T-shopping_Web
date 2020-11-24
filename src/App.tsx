import React, { FC } from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import { Main, ProductList } from "./components";
import * as S from "./GlobalStyle";

const App: FC<{}> = () => {
  return (
    <BrowserRouter>
      <S.GlobalStyle />
      <S.Container>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/list" component={ProductList} />
        </Switch>
      </S.Container>
    </BrowserRouter>
  );
};

export default App;
