import React from "react";
import BSLlogo from "../assets/logo-stack-dark 1 1.png";
import illus404 from "../assets/undraw_page_not_found_re_e9o6.svg";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <React.Fragment>
      <header className="px-4 sm:px-8 py-4">
        <Link to="/">
          <div className="flex items-center mx-">
            <img src={BSLlogo} alt="" />
            <span className="  ml-3 font-bold text-[20px] text-black ">
              BSL <span className="text-primary">ORDERS</span>{" "}
            </span>
          </div>
        </Link>
      </header>
      <main className="mt-12 text-primary">
        <img
          className="  mt-12 sm:mt-0 mx-auto w-[200px] h-[200px] sm:w-[600px] sm:h-72"
          src={illus404}
          alt=""
        />
        <h1 className="font-bold text-4xl text-center mt-12">
          Page not Found!
        </h1>
        <h1 className="font-normal text-center mt-8">
          You can return to{" "}
          <Link className="text-links" to="/">
            Login
          </Link>
        </h1>
      </main>
    </React.Fragment>
  );
};

export default ErrorPage;
