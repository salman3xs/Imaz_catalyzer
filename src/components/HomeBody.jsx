import React, { Component } from "react";
import "./css/HomeBody.css";

class HomeBody extends Component {
  render() {
    return (
      <div className="page">
        <h1>Welcome Teachers to Imaz Catalyzer</h1>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2037/2037885.png"
          alt="welcome-img"
          style={{ height: 350 }}
        />
        
      </div>
    );
  }
}

export default HomeBody;
