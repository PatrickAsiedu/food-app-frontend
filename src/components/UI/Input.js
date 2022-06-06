import React, { useState } from "react";
import { Link } from "react-router-dom";

const Input = (props) => {
  const [viewPassword, setViewPassword] = useState(false);

  const onViewPasswordHandler = () => {
    setViewPassword((prev) => !prev);
  };

  return (
    <div>
      <div className="flex justify-between">
        <label className=" text-sm font-medium" htmlFor={props.id}>
          {props.label}
        </label>
      </div>
      <div className="relative">
        <input
          className={`${props.styling}`}
          type={
            props.type === "password"
              ? viewPassword
                ? "text"
                : "password"
              : props.type
          }
          placeholder={props.placeholder}
          name={props.name}
          // pattern={props.type === 'text' && '[0]{1}[0-9]{9}'}
          pattern={props?.pattern}
          title={props.title}
          onChange={props.onChange}
          value={props.value}
          required
        />
        {props.type === "password" && (
          <button type="button" onClick={onViewPasswordHandler}>
            <svg
              className="absolute top-11 right-6"
              width="16"
              height="12"
              viewBox="0 0 16 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 0.416687C4.36364 0.416687 1.25818 2.67851 0 5.87123C1.25818 9.06396 4.36364 11.3258 8 11.3258C11.6364 11.3258 14.7418 9.06396 16 5.87123C14.7418 2.67851 11.6364 0.416687 8 0.416687ZM8 9.5076C5.99273 9.5076 4.36364 7.8785 4.36364 5.87123C4.36364 3.86396 5.99273 2.23487 8 2.23487C10.0073 2.23487 11.6364 3.86396 11.6364 5.87123C11.6364 7.8785 10.0073 9.5076 8 9.5076ZM8 3.68941C6.79273 3.68941 5.81818 4.66396 5.81818 5.87123C5.81818 7.07851 6.79273 8.05305 8 8.05305C9.20727 8.05305 10.1818 7.07851 10.1818 5.87123C10.1818 4.66396 9.20727 3.68941 8 3.68941Z"
                fill="#4D4D4D"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;
