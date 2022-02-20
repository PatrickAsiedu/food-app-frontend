import React from "react";
import pizzaImage from "../assets/image 1.png";
import classes from "./Login.module.css";
import Header from "../components/Layout/Header";
import LoginForm from "../components/LoginForm/LoginForm";

const Login = () => {
  return (
    <React.Fragment>
      <section className={classes.mainsection}>
        <div className={classes.imagecontainer}>
          <img
            className={classes.pizzaImage}
            src={pizzaImage}
            alt="people eating pizza"
          />
        </div>
        <div className={classes.formcontainer}>
          <Header className="webheader"></Header>
          <h1 className={classes.greeting}>Nice to see you again</h1>
          <LoginForm></LoginForm>
          <div className={classes.signup}>
            <span>Don't Have an account?</span>
            <span>
              <a href="www.google.com">Sign Up now</a>
            </span>
          </div>
          <Header className="mobileheader"></Header>
          <footer>
            <h1 className={classes.nspfooter}>
              &#169; Copyright NSP DEVS 2021
            </h1>
          </footer>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Login;
