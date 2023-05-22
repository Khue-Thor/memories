import React from "react";
import { Header, Profile, Cards } from "./components";
import { styles } from "./styles";
import StarsCanvas from "./components/Stars";
const App = () => {
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
    </div>
  );
};

export default App;
