import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="bg-amber-400 height: 30px; width:800px; margin-top: 6px; margin-left: 4px; margin-right: 4px;">
        <div className="flex flex-row justify-center gap-2 f">
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M20 10H4v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8ZM9 13v-1h6v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1Z"
              clipRule="evenodd"
            />
            <path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2Z" />
          </svg>
          <p className="font-sm">
            <span className="underline "> click here </span> to experience our
            integrations with platforms more easily
          </p>
        </div>
      </div>
      <div className="navbar bg-base-100 flex justify-between ">
        <div className="">
          <div className="flex flex-row justify-center items-center   gap-2 ml-2">
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M20 10H4v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8ZM9 13v-1h6v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1Z"
                clipRule="evenodd"
              />
              <path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2Z" />
            </svg>
            <button className="font-bold">Pine</button>
          </div>
        </div>
        <div className="flex flex-row justify-center gap-4 mt-4 font-bold">
          <button>Home</button>
          <button>Company</button>
          <button>Pricing</button>
          <button>Product</button>
          <button>Contact</button>
        </div>
        <div className="">
          <ul className="menu menu-horizontal px-1">
            <li>
              <div className="flex  justify-center items-center gap-4 mr-4 font-bold">
                <p className="mt-2">Login</p>
                <button className="h-[40px] w-[70px]  border-2  rounded-[5px] ml-4 container bg-amber-400 p-1 ">
                  Register
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-[1500px] h-[1px]  bg-slate-200 "></div>
    </div>
  );
};

export default Navbar;
