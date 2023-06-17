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
      <div className="w-[400px] bg-slate-400 flex flex-col items-center gap-2 p-3 rrounded-lg">
        <input
          className="w-[350px] bg-none text-black"
          value={userName}
          onChange={handleNameLogin}
        />
        <input className="w-[350px] text-black" value={password} onChange={handlePassLogin} />
        <button className="w-[200px] bg-red-200">Login</button>
        <p>New user!</p>
      </div>
    </div>
  );
};

export default Login;
