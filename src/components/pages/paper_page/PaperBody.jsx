import React, { Component } from "react";
import PaperCard from "./paper_card";

class PaperBody extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className={"m-2 d-flex"}>
          <h1 className={"mx-auto"}>My Papers</h1>
          <button
            type="button position-absolute bottom-0 end-0"
            class="btn btn-primary"
          >
            Add
          </button>
        </div>

        <div className={"d-flex"}>
          <PaperCard />
          <PaperCard />
          <PaperCard />
          <PaperCard />
        </div>
      </div>
    );
  }
}

export default PaperBody;
