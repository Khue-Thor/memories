import React, { useState } from "react";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleNameLogin = (e) => {
    setUserName(e.target.value);
  };

  const handlePassLogin = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="relative">
      <div className="w-[400px] bg-slate-400 flex flex-col gap-2 p-3 rounded-lg">
        <span className="m-0 p-0">Email:</span>
        <input
          className="w-[350px] bg-none text-black bg-slate-400 border-b-2"
          value={userName}
          onChange={handleNameLogin}
        />
        <span>Password:</span>
        <input
          className="w-[350px] bg-slate-400 text-black border-b-2"
          value={password}
          onChange={handlePassLogin}
        />
        <button className="w-[150px] bg-red-200 hover:bg-red-300 rounded-lg pt-1 pb-1 font-bold">
          Login
        </button>
        <p className="hover:text-blue-300 hover:cursor-pointer">New user!</p>
      </div>
    </div>
  );
};

export default Login;
