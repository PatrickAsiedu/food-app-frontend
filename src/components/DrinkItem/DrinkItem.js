import React from "react";

const DrinkItem = ({ drinkName, drinkID, onClickDelete }) => {
  return (
    <div className="bg-primary/10 py-3 grid grid-cols-2   lg:px-6   ">
      {/* <span className=" lg:hidden mx-auto my-auto h-[10px] w-[10px]  bg-orangebullet rounded-full"></span> */}
      <div className="ml-5 lg:ml-1  break-words  ">
        <span>{drinkName}</span>
      </div>
      <button
        className="flex justify-center items-center "
        onClick={() => onClickDelete(drinkID)}
      >
        <svg
          className=""
          width="20"
          height="25"
          viewBox="0 0 20 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.00284 0.00010011C7.87057 -0.001854 7.73925 0.0248171 7.61653 0.0785647C7.4938 0.132312 7.38211 0.212065 7.28793 0.313192C7.19376 0.414318 7.11898 0.534803 7.06794 0.66765C7.0169 0.800496 6.99062 0.943057 6.99061 1.08705H1.0128C0.880477 1.08502 0.749101 1.11163 0.626308 1.16534C0.503514 1.21905 0.391752 1.29879 0.297517 1.39992C0.203282 1.50106 0.128452 1.62157 0.0773768 1.75446C0.0263018 1.88734 0 2.02996 0 2.174C0 2.31805 0.0263018 2.46066 0.0773768 2.59355C0.128452 2.72644 0.203282 2.84695 0.297517 2.94809C0.391752 3.04922 0.503514 3.12896 0.626308 3.18267C0.749101 3.23638 0.880477 3.26299 1.0128 3.26096H18.9872C19.1195 3.26299 19.2509 3.23638 19.3737 3.18267C19.4965 3.12896 19.6082 3.04922 19.7025 2.94809C19.7967 2.84695 19.8715 2.72644 19.9226 2.59355C19.9737 2.46066 20 2.31805 20 2.174C20 2.02996 19.9737 1.88734 19.9226 1.75446C19.8715 1.62157 19.7967 1.50106 19.7025 1.39992C19.6082 1.29879 19.4965 1.21905 19.3737 1.16534C19.2509 1.11163 19.1195 1.08502 18.9872 1.08705H13.0094C13.0094 0.943057 12.9831 0.800496 12.9321 0.66765C12.881 0.534803 12.8062 0.414318 12.7121 0.313192C12.6179 0.212065 12.5062 0.132312 12.3835 0.0785647C12.2607 0.0248171 12.1294 -0.001854 11.9972 0.00010011H8.00284ZM1.0128 5.43486V22.8261C1.0128 24.0272 1.90653 25 3.00996 25H16.99C18.0935 25 18.9872 24.0272 18.9872 22.8261V5.43486H1.0128Z"
            fill="#002C59"
          />
        </svg>
      </button>
    </div>
  );
};

export default DrinkItem;
