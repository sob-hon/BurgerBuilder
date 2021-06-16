import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Cheese", type: "cheese" },
  { label: "Bacon", type: "bacon" },
  { label: "Salad", type: "salad" },
  { label: "Meat", type: "meat" },
];
const BuildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      <p className={classes.Price}>Total Price: {`${props.price.toFixed(2)}$`}</p>
      {controls.map((control) => {
        return <BuildControl 
                key={control.label}
                label={control.label} 
                added={() => props.ingredientAdded(control.type)} 
                removed={() => props.ingredientRemoved(control.type)}
                disabled={props.disabled[control.type]}
                />;
      })}
      <button className={classes.OrderButton} disabled={props.purchaseable} onClick={props.purchasing}>order now</button>
    </div>
  );
};

export default BuildControls;
