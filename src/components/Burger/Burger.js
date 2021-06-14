import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";

const Burger = (props) => {
  const transformedIngredients = Object.keys(props.ingredients).map((igKey) => {
    return [...Array(props.ingredients[igKey])].map((_, item) => {
      return <BurgerIngredients key={igKey + item} type={igKey} />;
    });
  });
  return (
    <div className={classes.Burger}>
      <BurgerIngredients type="bread-top" />
      {transformedIngredients}
      <BurgerIngredients type="bread-bottom" />
    </div>
  );
};

export default Burger;
