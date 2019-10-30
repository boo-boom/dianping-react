import React, { Component, lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

const Home = lazy(() => import(/* webpackChunkName: "Home" */ "@/views/Home"));

class Routes extends Component {
  shouldComponentUpdate() {
    return this.props.router.location.action === "PUSH";
  }
  render() {
    return (
      <Suspense fallback={<div>loading....</div>}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
      </Suspense>
    );
  }
}

export default Routes;
