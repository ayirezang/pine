import React from "react";

const Worldclass = () => {
  return (
    <div className="">
      <div className="flex flex-row justify-center gap-[450px] mt-8">
        <div className="mt-12 flex flex-col">
          <p className="font-extrabold text-5xl max-w-1">Worldclass dashbord</p>
          <p className=" font-sm mt-4 max-w-64">
            lprem ipleum is simply dummy text oflevel of the printing and
            typesetting industry
          </p>
          <button className="btn btn-warning mt-2">view all features</button>
        </div>

        <div className="mt-12 relative">
          <img
            src="https://st2.depositphotos.com/3394007/5397/v/450/depositphotos_53972909-stock-illustration-abstract-circular-light-gray-background.jpg"
            height="180px"
            width="280px"
            alt="gray"
          />
          <div className="h-[100px] w-[180px] rounded-[5px] bg-white shadow-xl absolute -left-12  -top-4 p-2">
            <div className="flex flex-row justify-between ">
              <p>Total Revenue</p>
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
                  d="M4.857 3A1.857 1.857 0 0 0 3 4.857v4.286C3 10.169 3.831 11 4.857 11h4.286A1.857 1.857 0 0 0 11 9.143V4.857A1.857 1.857 0 0 0 9.143 3H4.857Zm10 0A1.857 1.857 0 0 0 13 4.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 21 9.143V4.857A1.857 1.857 0 0 0 19.143 3h-4.286Zm-10 10A1.857 1.857 0 0 0 3 14.857v4.286C3 20.169 3.831 21 4.857 21h4.286A1.857 1.857 0 0 0 11 19.143v-4.286A1.857 1.857 0 0 0 9.143 13H4.857Zm10 0A1.857 1.857 0 0 0 13 14.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 21 19.143v-4.286A1.857 1.857 0 0 0 19.143 13h-4.286Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="h-[1px] w-[130px] bg-white   container mx-auto mt-4"></div>
            <div className="flex mt-2 ml-2 justify-between  ">
              <div className="h-[40px] w-[40px]  rounded-full flex justify-center items-center  bg-amber-400 ">
                <div className="h-[15px] w-[15px] rounded-full  bg-black container  mt-2 ">
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
                      d="M8 17.345a4.76 4.76 0 0 0 2.558 1.618c2.274.589 4.512-.446 4.999-2.31.487-1.866-1.273-3.9-3.546-4.49-2.273-.59-4.034-2.623-3.547-4.488.486-1.865 2.724-2.899 4.998-2.31.982.236 1.87.793 2.538 1.592m-3.879 12.171V21m0-18v2.2"
                    />
                  </svg>
                </div>
              </div>
              <div className="mt-2 font-bold">
                <p>4.32K</p>
              </div>
            </div>
          </div>
          <div className="h-[100px] w-[180px] bg-white shadow-xl absolute -bottom-4 -left-12">
            <div className="flex justify-between">
              <div>
                <p>Balance</p>
              </div>
              <button className="w-[69px] h-[30px] bg-black rounded-[5px] text-white">
                Reserved
              </button>
            </div>
            <div className="h-[1px] w-[130px] bg-zinc-100 container mx-auto mt-2"></div>
            <div className="flex flex-row">
              <div className="mt-1 font-bold ">
                <svg
                  className="w-4 h-4 text-gray-800 dark:text-white"
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
                    d="M8 17.345a4.76 4.76 0 0 0 2.558 1.618c2.274.589 4.512-.446 4.999-2.31.487-1.866-1.273-3.9-3.546-4.49-2.273-.59-4.034-2.623-3.547-4.488.486-1.865 2.724-2.899 4.998-2.31.982.236 1.87.793 2.538 1.592m-3.879 12.171V21m0-18v2.2"
                  />
                </svg>
              </div>
              <div className="font-bold">
                <p>60,124.00</p>
              </div>
            </div>
            <div className="w-[50px] h-[4px] bg-zinc-50 rounded-[5px] mt-1"></div>
            <div className="h-[20px] w-[180px] mt-1 bg-amber-400 p-0.5">
              <div className="flex justify-between ">
                <div>
                  <p>Pine</p>
                </div>
                <div className="w-[50px] h-[5px] bg-black rounded-[5px] mt-2 mr-2"></div>
              </div>
            </div>
          </div>
          <div
            className="h-[120px] w-[160px] bg-white shadow-xl absolute -bottom-4 -right-8 mb-16"
            text-black
          >
            Income &Expenses
            <img
              src="https://lh3.googleusercontent.com/ZhXP1x5xUwt3GMe52x65C-8lo2wEqMpIBmZOt6NB8-IwRRACMQ5goDP34ED1SV4BAnhlx6WBEVdbhSjhqzV6iJvevSMfEStcyn1959dTT5QBMGhvOjUdW0vS7SE1oaivWLwP99Jc"
              height="100px"
              width="120px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Worldclass;
