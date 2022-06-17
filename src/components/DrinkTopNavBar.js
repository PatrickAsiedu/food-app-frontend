import React from "react";

const DrinkTopNavBar = ({ setCurrentTab }) => {
  return (
    <nav className=" w-full mx-auto py-3 bg-primary mt-6 flex justify-evenly  text-white px-8  rounded-2xl mb-14">
      <button className="flex  items-center" onClick={() => setCurrentTab(1)}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 14V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H10V5H5V19H19V14H21Z"
            fill="white"
          />
          <path d="M21 7H17V3H15V7H11V9H15V13H17V9H21V7Z" fill="white" />
        </svg>

        <span className="ml-2 lg:flex">Add Drink</span>
      </button>

      <button className="flex" onClick={() => setCurrentTab(2)}>
        <svg
          width="18"
          height="20"
          viewBox="0 0 18 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0H2V20H0V0ZM7 4H14V6H7V4ZM7 8H14V10H7V8Z" fill="white" />
          <path
            d="M16 0H3V20H16C17.103 20 18 19.103 18 18V2C18 0.897 17.103 0 16 0ZM16 18H5V2H16V18Z"
            fill="white"
          />
        </svg>

        <span className="ml-2  lg:flex">View All Drinks</span>
      </button>
    </nav>
  );
};

export default DrinkTopNavBar;
