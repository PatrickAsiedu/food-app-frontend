import React from "react";
import Button from "../UI/button";
import classes from "../LoginForm/LoginForm.module.css";

import Input from "../UI/Input";

const LoginForm = () => {
  return (
    <form>
      <Input
        id="phonenumber"
        label="Phone Number"
        type="number"
        placeholder="Enter Phone Number"
      ></Input>
      <Input
        id="password"
        label="Password"
        type="password"
        placeholder="Enter Password"
      ></Input>
      <div className={classes.forgotpassword}>
        <div className={classes.checkbox}>
          <input id="rememberme" label="Remember me" type="checkbox"></input>
          <label htmlFor="rememberme">Remember me</label>
        </div>
        <a href="www.google.com">Forgot Password?</a>
      </div>
      <Button type="submit">Sign in</Button>
    </form>
  );
};

export default LoginForm;
