import React from "react";

const AllMenuTable = () => {
  return (
    <div className="hidden sm:flex sm:flex-col w-full  box-outer-shadow mt-12 rounded-3xl px-9 ">
      <div className="w-full pt-9  h-[72px] py-7  grid grid-cols-4 gap-3 mb-6">
        <h1 className="font-semibold pl-3">Food</h1>
        <h1 className="font-semibold ">Drinks</h1>
        <h1 className="font-semibold ">Date</h1>
        <h1 className="font-semibold mx-auto">Edit</h1>
      </div>

      <div className="w-full  bg-tablehighligh/50 grid grid-cols-4 text-sm gap-3 mb-6">
        <div className="py-4 font-medium break-words pl-3">
          <h1 className="mb-3">kljklsfjlkjdfkljkhjkfsdhjfhsdjkfhjksdfhjkhj</h1>
          <h1 className="mt font-medium break-words">dffhhhffhhh</h1>
        </div>
        <div className="py-4 font-medium break-words pl-3">
          <h1 className="mb-3">kljklsfjlkjdfkljkhjkfsdhjfhsdjkfhjksdfhjkhj</h1>
          <h1 className="mt font-medium break-words">dffhhhffhhh</h1>
        </div>
        <h1 className="py-4 font-medium break-words">
          kljklsfjlkjdfkljkhjkfsdhjfhsdjkfhjksdfhjkhj
        </h1>

        <button className="">
          <svg
            className="fill-checkbox mx-auto"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M28 30H6V8H19.22L21.22 6H6C5.46957 6 4.96086 6.21071 4.58579 6.58579C4.21071 6.96086 4 7.46957 4 8V30C4 30.5304 4.21071 31.0391 4.58579 31.4142C4.96086 31.7893 5.46957 32 6 32H28C28.5304 32 29.0391 31.7893 29.4142 31.4142C29.7893 31.0391 30 30.5304 30 30V15L28 17V30Z" />
            <path d="M33.53 5.84019L30.16 2.47019C30.0104 2.32022 29.8327 2.20123 29.6371 2.12005C29.4415 2.03886 29.2318 1.99707 29.02 1.99707C28.8082 1.99707 28.5985 2.03886 28.4028 2.12005C28.2072 2.20123 28.0295 2.32022 27.88 2.47019L14.17 16.2602L13.06 21.0702C13.0127 21.3033 13.0177 21.5441 13.0745 21.7751C13.1314 22.0061 13.2388 22.2216 13.3889 22.4062C13.539 22.5907 13.7282 22.7397 13.9428 22.8424C14.1574 22.9452 14.3921 22.999 14.63 23.0002C14.7529 23.0137 14.877 23.0137 15 23.0002L19.85 21.9302L33.53 8.12019C33.68 7.97063 33.7989 7.79295 33.8801 7.59733C33.9613 7.40171 34.0031 7.19199 34.0031 6.98019C34.0031 6.76839 33.9613 6.55867 33.8801 6.36305C33.7989 6.16743 33.68 5.98975 33.53 5.84019V5.84019ZM18.81 20.0802L15.15 20.8902L16 17.2602L26.32 6.87019L29.14 9.69019L18.81 20.0802ZM30.27 8.56019L27.45 5.74019L29 4.16019L31.84 7.00019L30.27 8.56019Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AllMenuTable;
