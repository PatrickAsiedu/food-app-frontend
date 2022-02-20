import React from "react";
import Bsllogo from "../../assets/logo-stack-dark 1.png";
import classes from "./Header.module.css";
const Header = (props) => {
  return (
    <div className={classes[props.className]}>
      <img src={Bsllogo} alt="bsl logo" />
      <span className={classes.logotag}>BSL ORDERS</span>
    </div>
  );
};

export default Header;
