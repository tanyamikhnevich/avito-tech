import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import { MainNews } from "../pages/main-news/main-news";
import { OneNew } from "../pages/one-new/one-new";
import store from "./../store/index";

import "./styles/index.scss";
import styles from "./app.module.scss";

function App() {
  return (
    <BrowserRouter>
      {/* todo: в индекс или здесь оставить?*/}
      <Provider store={store}>
        <div className={styles.app}>
          <Switch>
            <Route exact path={"/news"}>
              <MainNews />
            </Route>
            <Route exact path={"/news/:id"}>
              <OneNew />
            </Route>
            <Redirect to={"/news"} />
          </Switch>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
