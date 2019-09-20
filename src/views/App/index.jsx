import React from "react";
import Routes from "@/routes";
import "./style.scss";

function App() {
  // request({
  //   url: "http://music.hoohmm.com/search",
  //   data: {
  //     keywords: "海阔天空"
  //   }
  // }).then(res => {
  //   console.log(res.data);
  // }).catch(err => {
  //   console.log(err);
  // });
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
