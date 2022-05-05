import React from "react";

const OrderLunchForm = (props) => {
  return (
    <form
      action=""
      className={`${
        props.devicestatus
      }  ${"text-primary font-medium text-base  flex flex-col  mt-8 lg:mt-12   h-[750px]  lg:w-[750px] box-outer-shadow rounded-3xl mx-auto px-5 lg:px-24 "}`}
    >
      <h className="  mt-12 lg:mt-20 text-center font-semibold text-primary text-xl lg:text-2xl">
        Bon Appétit
      </h>

      <fieldset className="mt-[27px]">
        <legend className="">Choose Food</legend>
        <div className="relative  mt-[18px] flex  items-center  py-[18px]  rounded-lg pl-5 ">
          <input
            className=" peer hover:cursor-pointer appearance-none h-5 w-5 rounded-full border  "
            type="radio"
            id="hey"
            name="hey"
          />
          <label className="ml-[14px]" htmlFor="hey">
            Plain rice and Stew
          </label>
        </div>
        <div className=" relative  mt-[14px] flex  items-center  py-[18px]  rounded-lg pl-5 ">
          <input
            className=" peer hover:cursor-pointer appearance-none h-5 w-5 rounded-full border  "
            type="radio"
            id="hey"
            name="hey"
          />
          <label className="ml-[14px]" htmlFor="hey">
            Banku and Tilapia
          </label>
        </div>
        <div className=" relative  mt-[18px] flex  items-center  py-[14px]  rounded-lg pl-5 ">
          <input
            className=" peer hover:cursor-pointer appearance-none h-5 w-5 rounded-full border  "
            type="radio"
            id="hey"
            name="hey"
          />
          <label className="ml-[14px]" htmlFor="hey">
            Ampesi with Garden Egg Stew
          </label>
        </div>
      </fieldset>

      <label className="mt-10" htmlFor="">
        Comments
      </label>
      <textarea
        className="bg-primary mt-[18px] rounded-lg h-[164px] text-white px-4 pt-4  text-sm"
        name=""
        id=""
        cols="30"
        rows="7"
      ></textarea>
      <div className="mt-8 flex justify-center">
        <button className=" bg-primary h-16 w-[240px] text-white rounded-lg font-bold">
          Place Order
        </button>
      </div>

      {/* <label className="mt-5" htmlFor="">
        Choose Food
      </label>

      <div className="relative mt-[18px] flex items-center  py-5  rounded-lg pl-5 ">
        <input
          className="peer sr-only   "
          type="checkbox"
          id="PlainriceandStew"
          name="PlainriceandStew"
        />

        <label
          className=" ml-8 before:absolute before:content-[''] before:w-5 before:h-5 before:rounded-full before:border before:left-4 before:top-5 before:peer-checked:bg-[url('/src/assets/Vector.svg')] before:peer-checked:border-0 before:peer-checked:bg-cover "
          htmlFor="PlainriceandStew"
        >
          Plain rice and Stew
        </label>
      </div>

      <div className="relative mt-[14px] flex items-center hover:cursor-pointer py-5    rounded-lg pl-5 ">
        <input type="checkbox" className="peer sr-only" />
        <label
          className="  ml-8 before:absolute before:content-[''] before:w-5 before:h-5 before:rounded-full before:border before:left-4 before:top-5 before:peer-checked:bg-[url('/src/assets/Vector.svg')] before:peer-checked:border-0 before:peer-checked:bg-cover"
          htmlFor=""
        >
          Banku and Tilapia
        </label>
      </div>

      <div className="relative mt-[14px] flex items-center   py-5 rounded-lg pl-5 ">
        <input type="checkbox" className="peer sr-only" />
        <label
          className="  ml-8 before:absolute before:content-[''] before:w-5 before:h-5 before:rounded-full before:border before:left-4 before:top-5 before:peer-checked:bg-[url('/src/assets/Vector.svg')] before:peer-checked:border-0 before:peer-checked:bg-cover  hover:cursor-pointer"
          htmlFor=""
        >
          Ampesi with Garden Egg Stew
        </label>
      </div>

      <label className="mt-10" htmlFor="">
        Comments
      </label>
      <textarea
        className="bg-primary mt-[18px] rounded-lg h-[164px] text-white px-4 pt-4  text-sm"
        name=""
        id=""
        cols="30"
        rows="7"
      ></textarea>
      <div className="mt-8 flex justify-center">
        <button className=" bg-primary h-16 w-[240px] text-white rounded-lg font-bold">
          Place Order
        </button>
      </div> */}
    </form>
  );
};

export default OrderLunchForm;
