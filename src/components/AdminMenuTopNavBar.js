import React from "react";

const ChefMenuTopNavBar = ({ setCurrentTab }) => {
  return (
    <nav className=" w-full mx-auto py-3 bg-primary mt-6 flex justify-evenly items-center text-white px-8  rounded-2xl mb-14">
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

        <span className="ml-2 sm:hidden lg:flex">Add Menu</span>
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

        <span className="ml-2 sm:hidden lg:flex">All Menu's</span>
      </button>

      {/* <button className="flex" onClick={() => setCurrentTab(3)}>
        <svg
          className="fill-white"
          width="25"
          height="25"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M28 30H6V8H19.22L21.22 6H6C5.46957 6 4.96086 6.21071 4.58579 6.58579C4.21071 6.96086 4 7.46957 4 8V30C4 30.5304 4.21071 31.0391 4.58579 31.4142C4.96086 31.7893 5.46957 32 6 32H28C28.5304 32 29.0391 31.7893 29.4142 31.4142C29.7893 31.0391 30 30.5304 30 30V15L28 17V30Z" />
          <path d="M33.53 5.84019L30.16 2.47019C30.0104 2.32022 29.8327 2.20123 29.6371 2.12005C29.4415 2.03886 29.2318 1.99707 29.02 1.99707C28.8082 1.99707 28.5985 2.03886 28.4028 2.12005C28.2072 2.20123 28.0295 2.32022 27.88 2.47019L14.17 16.2602L13.06 21.0702C13.0127 21.3033 13.0177 21.5441 13.0745 21.7751C13.1314 22.0061 13.2388 22.2216 13.3889 22.4062C13.539 22.5907 13.7282 22.7397 13.9428 22.8424C14.1574 22.9452 14.3921 22.999 14.63 23.0002C14.7529 23.0137 14.877 23.0137 15 23.0002L19.85 21.9302L33.53 8.12019C33.68 7.97063 33.7989 7.79295 33.8801 7.59733C33.9613 7.40171 34.0031 7.19199 34.0031 6.98019C34.0031 6.76839 33.9613 6.55867 33.8801 6.36305C33.7989 6.16743 33.68 5.98975 33.53 5.84019V5.84019ZM18.81 20.0802L15.15 20.8902L16 17.2602L26.32 6.87019L29.14 9.69019L18.81 20.0802ZM30.27 8.56019L27.45 5.74019L29 4.16019L31.84 7.00019L30.27 8.56019Z" />
        </svg>

        <span className="ml-2 sm:hidden lg:flex ">Edit Menu</span>
      </button> */}
    </nav>
  );
};

export default ChefMenuTopNavBar;
