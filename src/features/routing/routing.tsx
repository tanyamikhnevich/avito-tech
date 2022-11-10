import React, { ReactNode } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

export interface IRoute {
  path?: string;
  component: ReactNode;
  default?: boolean;
  exact?: boolean;
}

interface Props {
  routes: IRoute[];
}

export const Routing = ({ routes }: Props) => {
  const defaultPath = routes.find((r) => r.default === true)?.path;

  return (
    <Switch>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} exact={route.exact}>
          {route.component}
        </Route>
      ))}
      {defaultPath && <Redirect to={defaultPath} />}
    </Switch>
  );
};
