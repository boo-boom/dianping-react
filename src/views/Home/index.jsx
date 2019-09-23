import React, { Component } from "react";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    return <div>HomePage</div>;
  }
}

const mapStateToProps = state => ({
  home: state.home
});

export default connect(
  mapStateToProps
)(Home);
