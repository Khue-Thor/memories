import React, { useState } from "react";
import { Header, Profile, Cards, ToggleSwitch } from "./components";
import { styles } from "./styles";
import StarsCanvas from "./components/Stars";
import useLocalStorage from "use-local-storage";

const App = () => {
  const [currentTheme, setCurrentTheme] = useState("dark");

  const handleThemeToggle = () => {
    setCurrentTheme(true);
  };
  return (
    <div
      className={`${styles.padding} z-0 relative black-gradient flex justify-start flex-col items-center`}
    >
      <div className="bg-slate-900 xl:w-[1024px] lg:w-[768px] w-[340px] pt-5 min-h-screen">
        <Header />
        <Profile />
        <Cards />
      </div>
      <StarsCanvas />
      <ToggleSwitch handleToggle={handleThemeToggle} />
    </div>
  );
};

export default App;
