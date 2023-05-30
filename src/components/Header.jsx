import React from "react";
import { logo } from "../assets";

const Header = () => {
  return (
    <div className="border-b-[1px] border-white ml-5 mr-5 pb-5 pt-5 header">
      <img src={logo} alt="logo" className="xl:min-w-[250px] hover:cursor-pointer" />
    </div>
  );
};

export default Header;
