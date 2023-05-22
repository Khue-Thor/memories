import React from "react";
import { waterfall } from "../assets";
const Cards = () => {
  return (
    <div className="flex flex-wrap gap-4 m-4">
      <div className="w-[320px] h-[420px] card rounded-xl overflow-hidden">
        <div className="h-[256px] relative">
          <img src={waterfall} alt="" className="h-[310px] w-[320px]" />
          <div className="absolute top-3 left-3">
            <h3 className="text-xl">Mark</h3>
            <p>2 months</p>
          </div>
        </div>
        <div className="mt-[70px] ml-2">
          <h2 className=" text-3xl">Waterfall</h2>
          <p>#waterfall</p>
          <div className="flex justify-between">
            <button className="like-bg"></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
