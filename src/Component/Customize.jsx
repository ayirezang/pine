import React from "react";

const Customize = ({ text }) => {
  return (
    <div className="flex justify-center  mt-6 gap-32">
      <div
        className="  gap-14
    font-extrabold text-4xl"
      >
        <p>Customize</p>
        <p>your meetings</p>
      </div>
      <div className="ml-8">
        <p>Pine is constantly improving to move </p>
        <p>forward through</p>

        <button className="btn btn-warning mt-3">{text}</button>
      </div>
    </div>
  );
};

export default Customize;
