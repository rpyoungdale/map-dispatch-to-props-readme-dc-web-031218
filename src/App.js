import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { addItem } from "./actions/items";
import { bindActionCreators } from "redux";

class App extends Component {
  handleOnClick() {
    this.props.addItem();
  }

  render() {
    // debugger;
    return (
      <div className="App">
        <button onClick={event => this.handleOnClick(event)}>Click</button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items
  };
};

/* code change */
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addItem: addItem
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
