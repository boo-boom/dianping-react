import React, { Component } from "react";
import Routes from "@/routes";
import errorCatch from "@/components/ErrorBoundary";
import "./style.scss";

@errorCatch
class App extends Component {
  render() {
    return (
      // 严格模式
      // <React.StrictMode>
      <div className="App">
        <Routes />
      </div>
      // </React.StrictMode>
    );
  }
}

export default App;
