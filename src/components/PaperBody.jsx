import React, { Component } from "react";

class PaperBody extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Your Papers</h1>
        <button onClick={{
          
        }}>
          <div>
            <h2>Chapter One Paper</h2>
            <h3>25 Questions</h3>
            <h4>Time: 30min</h4>
            <h4>Date: 5-7-22</h4>
          </div>
        </button>
      </div>
    );
  }
}

export default PaperBody;
