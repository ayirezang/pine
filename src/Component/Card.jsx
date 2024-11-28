import React from "react";

const Card = ({ image, imagea, imageClass, imageaClass, pay, className }) => {
  return (
    <div className="flex mt-10 gap-20 justify-center items-center">
      <div className="relative">
        <img src={image} alt="Shoes" className={imageClass} />
        <div className="h-[150px] w-[190px] bg-white shadow-2xl rounded-[5px] absolute -left-20 -top-1 ">
          <div className="flex flex-col justify-center items-center gap-1 mt-4 ">
            <img src={imagea} alt="women" className={imageaClass} />
            <p> Cole Coker</p>
            <div className="h-[7px] w-[140px] rounded-[5px] bg-zinc-200"></div>
            <div className="h-[7px] w-[100px] rounded-5px bg-zinc-200"></div>
            <div className="h-[40px] w-[190px] bg-amber-400">
              <div className="flex flex-row justify-center items-center mt-2">
                <svg
                  className="w-4 h-4 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24 "
                >
                  <path
                    fillRule="evenodd"
                    d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z"
                    clipRule="evenodd"
                  />
                </svg>
                <p>Add to Project</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="   shadow-xl">
        <img src={pay} className={className} alt="payment" />
      </div>

      <div>
        <div className="pt-2 pl-1">
          <svg
            className="w-4 h-4 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
          </svg>
        </div>
        <div>
          <p className="text-black text-sm mt-2 max-w-52 ">
            pine is constantly improving to move foward through
            dashbord,statistics,data and verify and superior humanLorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
