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
      <p>Total Price: {`${props.price}$`}</p>
      {controls.map((control) => {
        return <BuildControl 
                key={control.label}
                label={control.label} 
                added={() => props.ingredientAdded(control.type)} 
                removed={() => props.ingredientRemoved(control.type)}
                disabled={props.disabled[control.type]}
                />;
      })}
    </div>
  );
};

export default BuildControls;
