import React, { Component, lazy, Suspense } from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import ErrorBoundary from "@/components/ErrorBoundary";

const Home = lazy(() => import(/* webpackChunkName: "Home" */ "@/views/Home"));

class Routes extends Component {
  render() {
    return (
      <Suspense fallback={<div>loading....</div>}>
        <HashRouter>
          <ErrorBoundary>
            <Switch>
              <Route exact path="/" component={Home} />
              <Redirect to="/" />
            </Switch>
          </ErrorBoundary>
        </HashRouter>
      </Suspense>
    );
  }
}

export default Routes;
