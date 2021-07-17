import React, { Component } from "react";
import Auxiliary from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

const ingredientPrices = {
  salad: 0.3,
  cheese: 0.4,
  meat: 0.8,
  bacon: 0.6,
};
class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 1.1,
    purchaseable: false,
    purchasing: false,
    loading: false,
  };

  componentDidMount() {
    axios
      .get(
        "https://burgerbuilder-e00ae-default-rtdb.firebaseio.com/ingredients.json"
      )
      .then((response) => {
        this.setState({
          ingredients: response.data,
        });
      });
  }

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

  cancelPurchaseHandler = () => {
    this.setState({
      purchasing: false,
    });
  };

  continuePurchaseHandler = () => {
    const queryParams = [];
    for( let i in this.state.ingredients) {
      queryParams.push(`${encodeURIComponent(i)}=${encodeURIComponent(this.state.ingredients[i])}`)
    }
    queryParams.push(`price=${this.state.totalPrice}`)
    const queryString = queryParams.join('&');
    this.props.history.push({
      pathname: '/checkout',
      search: `?${queryString}`
    });
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    // let modal = null;
    // if (this.state.purchasing) {
    //   modal = (
    //     <Modal>
    //       <OrderSummary ingredients={this.state.ingredients} />
    //     </Modal>
    //   );
    //   console.log(modal);
    // }
    let orderSummary = null;

    let burger = <Spinner />;

    if (this.state.ingredients) {
      burger = (
        <Auxiliary>
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

      orderSummary = (
        <OrderSummary
          ingredients={this.state.ingredients}
          cancel={this.cancelPurchaseHandler}
          continue={this.continuePurchaseHandler}
          price={this.state.totalPrice}
        />
      );
    }

    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    return (
      <Auxiliary>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.cancelPurchaseHandler}
        >
          {orderSummary}
        </Modal>
        {burger}
      </Auxiliary>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);
