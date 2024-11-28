import React from "react";
import Navbar from "./Component/Navbar";
import Customize from "./Component/Customize";
import Card from "./Component/Card";
import Bank3 from "./Images/Bank3.png";

import Hordiv from "./Component/Hordiv";
import Worldclass from "./Component/Worldclass";

const App = () => {
  return (
    <div>
      <Navbar />
      <Customize text="Get started" />
      <Card
        image="https://cgfaces.com/collection/preview/020e507a-eac6-455a-87b4-31afcf6036c0.jpg"
        imageClass="w-72 h-95 grayscale  relative "
        imagea="https://images.squarespace-cdn.com/content/v1/6204821bfe06b76898b431c5/1660858625934-ZVWEMZYZHLWTVCXC19E3/Brandon+Andre+-+Headshot+Los+Angeles+na4-3.jpg"
        imageaClass="  h-[40px] w-[40px]  rounded-full"
        pay={Bank3}
        className="w-60 h-65 "
      />
      <Hordiv />
      <Worldclass />
    </div>
  );
};

export default App;
