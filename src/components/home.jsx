import React, { Component } from "react";
import Drawer from "./Drawer";
import HomeBody from "./HomeBody";
import PaperBody from "./PaperBody";

class Home extends Component {
  state = {
    page: 4,
  };
  handleChange = (value) => {
    console.log(value);
    this.setState({ page: value });
  };
  render() {
    var page = this.state.page;
    return (
      <div className="App" style={{ display: "flex" }}>
        <Drawer page={page} onChange={this.handleChange} />
        {page === 0 ? <HomeBody /> : <div />}
        {page === 1 ? <PaperBody /> : <div />}
        {page === 2 ? <div /> : <div />}
        {page === 3 ? <div /> : <div />}
        {page === 4 ? <div /> : <div />}
      </div>
    );
  }
}

export default Home;
