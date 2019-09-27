import React, { Component } from "react";
// import axios from "axios";

let errNum = 0;
const errorCatch = WrapComponent => {
  return class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false, errInfo: "" };
    }

    componentWillMount() {
      let errorInfo = {};
      window.addEventListener(
        "error",
        e => {
          errNum++;
          errorInfo = {
            errNum,
            type: e.type,
            msg: e.message,
            url: e.filename,
            line: e.lineno,
            col: e.colno,
            // stack: e.error.stack
          };
          console.log("捕获到异常1：", errorInfo);
          // axios.post("http://localhost:3004/v1/errReport", {
          //   errorInfo: errorInfo
          // });
        },
        true
      );
      window.addEventListener("unhandledrejection", function(e) {
        e.preventDefault();
        // reason: reject传递的错误
        console.log("捕获到异常2：", e);
        // axios.post("http://localhost:3004/v1/errReport", {
        //   errorInfo: {reason: e.reason, type: e.type}
        // });
        return true;
      });
    }

    componentDidCatch(error, errInfo) {
      this.setState({ hasError: true, errInfo });
    }

    render() {
      if (this.state.hasError) {
        return <h1>{this.state.errInfo}</h1>;
      }
      return <WrapComponent />;
    }
  };
};

export default errorCatch;
