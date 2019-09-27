import React, { Component, lazy, Suspense } from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import errorCatch from "@/components/ErrorBoundary";

const Home = lazy(() => import(/* webpackChunkName: "Home" */ "@/views/Home"));

@errorCatch
class Routes extends Component {
  render() {
    return (
      <Suspense fallback={<div>loading....</div>}>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Redirect to="/" />
          </Switch>
        </HashRouter>
      </Suspense>
    );
  }
}

export default Routes;
