import React from "react";

const ResetPasswordApprovaltile = () => {
  return (
    <div className="w-full  mb-8 ">
      <div className=" flex  flex-col">
        <div className="flex text-base font-medium items-center ">
          <div className="">
            <svg
              width="31"
              height="31"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.5 0C7.09745 0 0 7.09745 0 15.5C0 23.9025 7.09745 31 15.5 31C23.9025 31 31 23.9025 31 15.5C31 7.09745 23.9025 0 15.5 0ZM15.5 7.75C18.1768 7.75 20.15 9.7216 20.15 12.4C20.15 15.0784 18.1768 17.05 15.5 17.05C12.8247 17.05 10.85 15.0784 10.85 12.4C10.85 9.7216 12.8247 7.75 15.5 7.75ZM7.5857 22.8966C8.97605 20.8506 11.2948 19.4866 13.95 19.4866H17.05C19.7067 19.4866 22.024 20.8506 23.4143 22.8966C21.4334 25.017 18.6233 26.35 15.5 26.35C12.3767 26.35 9.5666 25.017 7.5857 22.8966Z"
                fill="url(#paint0_linear_485_639)"
                fillOpacity="0.3"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_485_639"
                  x1="9.62798"
                  y1="8.80359"
                  x2="14.5575"
                  y2="31.2074"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.0625347" stopColor="#00D4FF" />
                  <stop offset="1" stopColor="#002C59" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="ml-4 leading-8">
            <span className=" font-bold">David Dag Vanderpuijek</span>
            <span className="ml-4">requested a password reset </span> on
            <span className="ml-4">Thu 24, May 2022</span>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="mt-12 bg-primary text-white font-bold w-[239px] h-[63px] rounded-lg">
            Approve
          </button>
          <button className="mt-12 bg-notification text-white font-bold w-[239px] h-[63px] rounded-lg ml-[56px]">
            Deny
          </button>
        </div>
      </div>
      <div className="mt-8 border h-0 w-full"></div>
    </div>
  );
};

export default ResetPasswordApprovaltile;
