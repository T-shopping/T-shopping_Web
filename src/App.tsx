import React, { FC } from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import { Main } from "./components";
import * as S from "./GlobalStyle";

const App: FC<{}> = () => {
  return (
    <BrowserRouter>
      <S.GlobalStyle />
      <S.Container>
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </S.Container>
    </BrowserRouter>
  );
};

export default App;
