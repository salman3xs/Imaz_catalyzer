import React, { Component } from "react";
import paper from "./../../../assets/images/paper.png";

class PaperCard extends Component {
  render() {
    return (
      <div className={"card m-3"} style={{ width: "18rem", height: "310px" }}>
        <img
          src={paper}
          className={"card-img-top m-3 mx-auto"}
          alt={"paper"}
          style={{ height: "100px", width: "100px" }}
        />
        <div className="card-body">
          <h5 className={"card-title"}>Paper Name</h5>
          <p className={"card-text"}>Time:30min</p>
          <p className={"card-text"}>Question:30</p>
          <a href="#" className={"btn btn-primary"}>
            Go somewhere
          </a>
        </div>
      </div>
    );
  }
}

export default PaperCard;
