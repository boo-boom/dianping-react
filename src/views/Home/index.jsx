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
    return (
      <div>
        HomePage
        <ul>
          {this.props.home.list[0] && this.props.home.list[0].product}
        </ul>
      </div>
    );
  }
}

export default Home;
