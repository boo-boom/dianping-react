import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProductList } from "@/redux/action/Home";

@connect(
  state => ({
    home: state.home
  }),
  { fetchProductList }
)
class Home extends Component {
  componentDidMount() {
    this.props.fetchProductList();
  }
  render() {
    console.log(this.props.home);
    return <div>HomePage</div>;
  }
}

export default Home;
