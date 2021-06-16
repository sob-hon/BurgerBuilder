import React, { Component } from "react";
import Auxiliary from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const ingredientPrices = {
  salad: 0.3,
  cheese: 0.4,
  meat: 0.8,
  bacon: 0.6,
};
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      meat: 0,
      bacon: 0,
    },
    totalPrice: 1.1,
    purchaseable: false,
    purchasing: false,
  };

  updatePurchase = (ingredients) => {
    let sum = 0;
    for (const key of Object.keys(ingredients)) {
      sum += ingredients[key];
    }

    this.setState({
      purchaseable: sum > 0,
    });
  };

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const newPrice = this.state.totalPrice + ingredientPrices[type];
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice,
    });
    this.updatePurchase(updatedIngredients);
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedCount;
    const newPrice = this.state.totalPrice - ingredientPrices[type];
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice,
    });
    this.updatePurchase(updatedIngredients);
  };

  purchasingHanlder = () => {
    this.setState({
      purchasing: true,
    });
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let modal = null;
    if (this.state.purchasing) {
      modal = (
        <Modal>
          <OrderSummary ingredients={this.state.ingredients} />
        </Modal>
      );
      console.log(modal);
    }

    return (
      <Auxiliary>
        {modal}
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          price={this.state.totalPrice}
          disabled={disabledInfo}
          purchaseable={!this.state.purchaseable}
          purchasing={this.purchasingHanlder}
        />
      </Auxiliary>
    );
  }
}

export default BurgerBuilder;
