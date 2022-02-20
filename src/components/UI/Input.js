import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label className={classes.textlabel} htmlFor={props.id}>
        {props.label}
      </label>
      <input
        className={classes.textinput}
        type={props.type}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Input;
