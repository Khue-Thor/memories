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
      <div className="xl:w-[1024px] lg:w-[768px] pt-5 w-[340px] min-h-screen main-app">
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
