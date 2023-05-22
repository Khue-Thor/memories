import React, { useState } from "react";
import { Header, Profile, Cards, ToggleSwitch } from "./components";
import { styles } from "./styles";
import StarsCanvas from "./components/Stars";
import useLocalStorage from "use-local-storage";
import { CurrentThemeContext } from "./context/currentThem";

const App = () => {
  const [currentTheme, setCurrentTheme] = useLocalStorage("theme" ? "dark" : "light");

  const switchTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setCurrentTheme(newTheme);
  };

  return (
    <div
      className={`${styles.padding} z-0 relative app black-gradient flex justify-start flex-col items-center`}
      data-theme={currentTheme}
    >
      <div className="xl:w-[1024px] lg:w-[768px] w-[340px] pt-5 min-h-screen bg-slate-900">
        <Header />
        <Profile />
        <Cards />
      </div>
      <StarsCanvas />
      <ToggleSwitch handleToggle={switchTheme} />
    </div>
  );
};

export default App;
