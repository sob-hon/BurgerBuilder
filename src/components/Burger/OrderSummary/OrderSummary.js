import React from "react";
import Auxiliary from "../../../hoc/Auxiliary";
import Button from '../../UI/Button/Button';


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
      <p><strong>Total Price: {`${props.price.toFixed(2)}$`}</strong></p>
      <Button clicked= {props.cancel} btnType= "Danger">
        cancel
      </Button>
      <Button clicked= {props.continue} btnType= "Success">
        continue
      </Button>
    </Auxiliary>
  );
};

export default OrderSummary;
