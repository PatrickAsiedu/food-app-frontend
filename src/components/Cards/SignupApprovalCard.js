import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { approveUser, denyUser } from "../../redux/adminSlice";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const SignupApprovalCard = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userList = useSelector((state) =>
    state.admin.allUsers.filter((user) => user.status === "PENDING")
  );

  const displayError = (errorMessage) => {
    Swal.fire({
      title: "No way!",
      text: errorMessage,
      icon: "error",
      confirmButtonText: "Okay",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.reload();
      }
    });
  };

  const displaySuccess = (successMessage) => {
    Swal.fire({
      title: "Success!",
      text: successMessage,
      icon: "success",
      confirmButtonText: "Okay",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.reload();
      }
    });
  };

  const approveUserFunc = async (id) => {
    console.log("approve user with id: ", props.id);
    const response = await dispatch(
      approveUser({ user_id: props.id })
    ).unwrap();
    if (response.status === 200) {
      displaySuccess("User approved succesfully");
    } else if (response.status === 400) {
      displayError("User cannot be approved");
    }
    // window.location.reload();
  };

  const rejectUserFunc = async (id) => {
    console.log("reject user with id: ", id);
    const response = await dispatch(denyUser({ user_id: props.id })).unwrap();
    if (response.status === 200) {
      displaySuccess("User rejected succesfully");
    } else if (response.status === 400) {
      displayError("User cannot be denied");
    }
    // window.location.reload();
  };
  return (
    <div className="sm:hidden w-full  box-outer-shadow rounded-3xl px-6 flex-col pt-6 text-primary mb-4 ">
      <h1 className="font-medium text-base text-primary break-words ">
        {props.name} ,
        <span className=" ml-4 text-sm font-normal text-primary/30 ">Name</span>
      </h1>
      <h1 className="mt-2 font-medium text-base text-primary break-words ">
        {props.number} ,
        <span className=" ml-4 text-sm font-normal text-primary/30 ">
          Number
        </span>
      </h1>
      <h1 className="mt-2 font-medium text-base text-primary break-words ">
        {props.type} ,
        <span className=" ml-4 text-sm font-normal text-primary/30 ">
          Account Type
        </span>
      </h1>
      <h1 className="mt-2 font-medium text-base text-primary break-words ">
        {props.status} ,
        <span className=" ml-4 text-sm font-normal text-primary/30 ">
          Status
        </span>
      </h1>
      <h1 className="mt-2 font-medium text-base text-primary break-words ">
        {props.date} ,
        <span className=" ml-4 text-sm font-normal text-primary/30 ">
          Date Registered
        </span>
      </h1>

      <div className="mt-6 flex justify-evenly pb-4">
        <button onClick={() => approveUserFunc(props.id)} className="">
          <svg
            className="fill-checkbox"
            width="30"
            height="30"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7.5 3.75C6.50544 3.75 5.55161 4.14509 4.84835 4.84835C4.14509 5.55161 3.75 6.50544 3.75 7.5V17.5C3.75 18.4946 4.14509 19.4484 4.84835 20.1517C5.55161 20.8549 6.50544 21.25 7.5 21.25H13.7975C13.7658 21.0432 13.7499 20.8342 13.75 20.625C13.75 20.4112 13.7713 20.2025 13.8125 20H7.5C6.83696 20 6.20107 19.7366 5.73223 19.2678C5.26339 18.7989 5 18.163 5 17.5V7.5C5 6.83696 5.26339 6.20107 5.73223 5.73223C6.20107 5.26339 6.83696 5 7.5 5H17.5C18.163 5 18.7989 5.26339 19.2678 5.73223C19.7366 6.20107 20 6.83696 20 7.5V11.3013C20.4487 11.3763 20.87 11.5325 21.25 11.7513V7.5C21.25 6.50544 20.8549 5.55161 20.1517 4.84835C19.4484 4.14509 18.4946 3.75 17.5 3.75H7.5ZM17.3175 9.8175C17.4349 9.70014 17.5008 9.54097 17.5008 9.375C17.5008 9.20903 17.4349 9.04986 17.3175 8.9325C17.2001 8.81514 17.041 8.74921 16.875 8.74921C16.709 8.74921 16.5499 8.81514 16.4325 8.9325L10.625 14.7413L8.5675 12.6825C8.45014 12.5651 8.29097 12.4992 8.125 12.4992C7.95903 12.4992 7.79986 12.5651 7.6825 12.6825C7.56514 12.7999 7.49921 12.959 7.49921 13.125C7.49921 13.291 7.56514 13.4501 7.6825 13.5675L10.1825 16.0675C10.2406 16.1257 10.3095 16.1719 10.3855 16.2034C10.4614 16.2349 10.5428 16.2511 10.625 16.2511C10.7072 16.2511 10.7886 16.2349 10.8645 16.2034C10.9405 16.1719 11.0094 16.1257 11.0675 16.0675L17.3175 9.8175V9.8175ZM21.875 15C21.875 15.663 21.6116 16.2989 21.1428 16.7678C20.6739 17.2366 20.038 17.5 19.375 17.5C18.712 17.5 18.0761 17.2366 17.6072 16.7678C17.1384 16.2989 16.875 15.663 16.875 15C16.875 14.337 17.1384 13.7011 17.6072 13.2322C18.0761 12.7634 18.712 12.5 19.375 12.5C20.038 12.5 20.6739 12.7634 21.1428 13.2322C21.6116 13.7011 21.875 14.337 21.875 15ZM23.75 20.625C23.75 22.1813 22.5 23.75 19.375 23.75C16.25 23.75 15 22.1875 15 20.625C15 20.1277 15.1975 19.6508 15.5492 19.2992C15.9008 18.9475 16.3777 18.75 16.875 18.75H21.875C22.3723 18.75 22.8492 18.9475 23.2008 19.2992C23.5525 19.6508 23.75 20.1277 23.75 20.625Z" />
          </svg>
        </button>
        <button onClick={() => rejectUserFunc(props.id)}>
          <svg
            className="fill-red-500"
            width="27"
            height="27"
            viewBox="0 0 15 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.00213 7.20795e-05C5.90293 -0.00133488 5.80444 0.0178683 5.7124 0.0565665C5.62035 0.0952648 5.53658 0.152687 5.46595 0.225498C5.39532 0.298309 5.33923 0.385058 5.30095 0.480708C5.26267 0.576357 5.24296 0.679001 5.24296 0.782678H0.7596C0.660358 0.781211 0.561826 0.80037 0.469731 0.839042C0.377636 0.877713 0.293814 0.935126 0.223138 1.00794C0.152461 1.08076 0.0963388 1.16753 0.0580326 1.26321C0.0197264 1.35889 0 1.46157 0 1.56528C0 1.669 0.0197264 1.77168 0.0580326 1.86736C0.0963388 1.96304 0.152461 2.04981 0.223138 2.12262C0.293814 2.19544 0.377636 2.25285 0.469731 2.29152C0.561826 2.3302 0.660358 2.34936 0.7596 2.34789H14.2404C14.3396 2.34936 14.4382 2.3302 14.5303 2.29152C14.6224 2.25285 14.7062 2.19544 14.7769 2.12262C14.8475 2.04981 14.9037 1.96304 14.942 1.86736C14.9803 1.77168 15 1.669 15 1.56528C15 1.46157 14.9803 1.35889 14.942 1.26321C14.9037 1.16753 14.8475 1.08076 14.7769 1.00794C14.7062 0.935126 14.6224 0.877713 14.5303 0.839042C14.4382 0.80037 14.3396 0.781211 14.2404 0.782678H9.75704C9.75704 0.679001 9.73733 0.576357 9.69905 0.480708C9.66077 0.385058 9.60468 0.298309 9.53405 0.225498C9.46342 0.152687 9.37965 0.0952648 9.2876 0.0565665C9.19556 0.0178683 9.09707 -0.00133488 8.99787 7.20795e-05H6.00213ZM0.7596 3.9131V16.4348C0.7596 17.2996 1.4299 18 2.25747 18H12.7425C13.5701 18 14.2404 17.2996 14.2404 16.4348V3.9131H0.7596Z"
              fill=""
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SignupApprovalCard;
