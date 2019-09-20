import React from "react";
import Home from "@/views/Home";
import request from "@/utils/request";
import "./style.scss";

function App() {
  request({
    url: "http://music.hoohmm.com/search",
    data: {
      keywords: "海阔天空"
    }
  }).then(res => {
    console.log(res.data);
  }).catch(err => {
    console.log(err);
  });
  return <div className="App">
    <Home />
  </div>;
}

export default App;
