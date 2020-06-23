import React from "react";

import Routes from "../../routes";

import TopBar from "../../components/Topbar";

import "./App.scss";

const App = () => (
  <div data-testid="app" className="app">
    <React.Fragment>
      <TopBar />
      <Routes />
    </React.Fragment>
  </div>
);

export default App;
