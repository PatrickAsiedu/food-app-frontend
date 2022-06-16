import React from "react";
import loadingGif from "../../assets/loading.gif";

const RenderLoading = () => {
  return (
    <div className="text-primary font-medium text-base  flex flex-col  mt-8 lg:mt-12  pb-5  lg:w-[650px] box-outer-shadow rounded-3xl mx-auto px-5 lg:px-12 ">
      <img src={loadingGif} alt="loader" />
      <h1 className=" mt-8 mb-8 lg:mt-20 text-center font-semibold text-primary text-xl">
        {/* Loading ... */}
      </h1>
    </div>
  );
};

export default RenderLoading;
