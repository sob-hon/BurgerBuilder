import React from "react";
import Auxiliary from "../../../hoc/Auxiliary";

const OrderSummary = (props) => {
  const orderIngredients = Object.keys(props.ingredients).map((igKey) => {
    return (
    <li key={igKey}> 
      {`${igKey}: ${props.ingredients[igKey]}`}
    </li>
    );
  });

  return (
    <Auxiliary>
      <h3>Your order list</h3>
      <p>A burger of the following ingredients:</p>
      <ul>
        {orderIngredients}
      </ul>
    </Auxiliary>
  );
};

export default OrderSummary;
