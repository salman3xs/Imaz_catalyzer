import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChalkboard,
  faHome,
  faInfo,
  faPaperclip,
  faSquarePollHorizontal,
} from "@fortawesome/free-solid-svg-icons";
import "./css/Drawer.css";

class Drawer extends Component {
  state = {};
  render() {
    return (
      <div className="drawer">
        <h1>Imaz Catalyzer</h1>
        <div className="drawer_buttons">
          <button
            onClick={() => this.props.onChange(0)}
            className={
              "drawer_button " +
              (this.props.page === 0 ? "drawer_button_active" : "")
            }
          >
            <FontAwesomeIcon
              icon={faHome}
              style={{ color: "white", padding: 10 }}
            />
            Home
          </button>
          <button
            onClick={() => {
              this.props.onChange(1);
            }}
            className={
              "drawer_button " +
              (this.props.page === 1 ? "drawer_button_active" : "")
            }
          >
            <FontAwesomeIcon
              icon={faPaperclip}
              style={{ color: "white", padding: 10 }}
            />
            Papers
          </button>
          <button
            onClick={() => {
              this.props.onChange(2);
            }}
            className={
              "drawer_button " +
              (this.props.page === 2 ? "drawer_button_active" : "")
            }
          >
            <FontAwesomeIcon
              icon={faChalkboard}
              style={{ color: "white", padding: 10 }}
            />
            Student
          </button>
          <button
            onClick={() => {
              this.props.onChange(3);
            }}
            className={
              "drawer_button " +
              (this.props.page === 3 ? "drawer_button_active" : "")
            }
          >
            <FontAwesomeIcon
              icon={faSquarePollHorizontal}
              style={{ color: "white", padding: 10 }}
            />
            Result
          </button>
          <button
            onClick={() => {
              this.props.onChange(4);
            }}
            className={
              "drawer_button " +
              (this.props.page === 4 ? "drawer_button_active" : "")
            }
          >
            <FontAwesomeIcon
              icon={faInfo}
              style={{ color: "white", padding: 10 }}
            />
            About
          </button>
        </div>
        <h3>V 1.0</h3>
      </div>
    );
  }
}

export default Drawer;
