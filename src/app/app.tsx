import React from "react";

import { publicRoutes } from "app/lib/routes";
import { Routing } from "features/routing";

import "./styles/index.scss";

function App() {
  return (
    <div>
      <Routing routes={publicRoutes} />
    </div>
  );
}

export default App;
