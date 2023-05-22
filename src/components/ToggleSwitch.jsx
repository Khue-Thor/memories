import React from "react";
import { sun, moon } from "../assets";
const ToggleSwitch = () => {
  return (
    <div className="flex flex-col fixed left-3 top-[600px] justify-center gap-3">
      <img src={moon} className="w-[28px]" />
      <div className="toggleswitch__container">
        <label className="toggleswitch">
          <input className="toggleswitch__input" type="checkbox" />
          <span className="toggleswitch__slider"></span>
        </label>
      </div>
      <img src={sun} className="w-[28px]" />
    </div>
  );
};

export default ToggleSwitch;
