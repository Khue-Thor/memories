import React from "react";
import { logo } from "../assets";
const Header = () => {
  return (
    <div className="border-b-2 ml-5 mr-5 pb-5">
      <img src={logo} alt="logo" className="xl:min-w-[250px] hover:cursor-pointer" />
    </div>
  );
};

export default Header;
