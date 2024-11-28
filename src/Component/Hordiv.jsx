import React from "react";

const Hordiv = () => {
  return (
    <div className="bg-black flex justify-evenly  mt-8 container w-10/12 mx-auto h-20 rounded-[10px]">
      <div className="flex flex-col text-white justify-center uppercase">
        <p>features</p>
        <div className="mt-1 flex justify-center items-center ">
          <svg
            className="w-4 h-4 text-white dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h14m-7 7V5"
            />
          </svg>
          <p className="font-bold text-lg">876K</p>
        </div>
      </div>

      <div className="flex flex-col text-white justify-center uppercase">
        <p>clients</p>
        <div className="mt-1 flex justify-center items-center ">
          <svg
            className="w-4 h-4 text-white dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h14m-7 7V5"
            />
          </svg>
          <p className="font-bold text-lg">876K</p>
        </div>
      </div>

      {/*  */}

      <div className="flex flex-col text-white justify-center uppercase">
        <p>stats</p>
        <div className="mt-1 flex  justify-center items-center">
          <svg
            className="w-4 h-4 text-white dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h14m-7 7V5"
            />
          </svg>
          <p className="font-bold text-lg">86K</p>
        </div>
      </div>
    </div>
  );
};

export default Hordiv;
