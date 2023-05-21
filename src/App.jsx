import React from "react";
import { Header } from "./components";
import {styles} from './styles'
const App = () => {
  return (
    <div className={`${styles.padding} h-screen black-gradient flex justify-start flex-col items-center`}>
      <div className="bg-red-300 bg-slate-900 xl:w-[1080px] pt-10 h-screen">
        <Header />
      </div>
    </div>
  );
};

export default App;
