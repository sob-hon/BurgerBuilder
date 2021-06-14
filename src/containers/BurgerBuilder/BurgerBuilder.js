import React, { Component } from "react";
import Auxiliary from '../../hoc/Auxiliary'


class BurgerBuilder extends Component {
  state = {};
  render() {
    return (
      <Auxiliary>
        <div>Burger</div>
        <div>Burger Builder Controls</div>
      </Auxiliary>
    );
  }
}

export default BurgerBuilder;
