import React from "react";

import { publicRoutes } from "app/lib/routes";
import { Routing } from "features/routing";
import { Layout } from "widgets";

import "./styles/index.scss";

function App() {
  return (
    <Layout>
      <Routing routes={publicRoutes} />
    </Layout>
  );
}

export default App;
