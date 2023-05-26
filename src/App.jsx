import React, { useState } from "react";
import { Header, Profile, Main, ToggleSwitch, EditProfileModal, CardAddModal } from "./components";
import { styles } from "./styles";
import StarsCanvas from "./components/Stars";
import useLocalStorage from "use-local-storage";

const App = () => {
  const [currentTheme, setCurrentTheme] = useLocalStorage("theme" ? "dark" : "light");
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isCardAddModalOpen, setIsCardAddModalOpen] = useState(false);
  const [name, setName] = useState();

  const handleModalOpen = () => {
    setIsEditModalOpen(true);
    setIsCardAddModalOpen(true);
  };

  const handleModalClose = () => {
    setIsEditModalOpen(false);
    setIsCardAddModalOpen(false);
  };

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
        <Profile onEditModal={handleModalOpen} onAddmodal={handleModalOpen} name={"name"} />
        <Main />
      </div>
      <StarsCanvas />
      <ToggleSwitch handleToggle={switchTheme} />
      {isEditModalOpen && <EditProfileModal onCloseModal={handleModalClose} />}
      {isCardAddModalOpen && <CardAddModal onCloseModal={handleModalClose} />}
    </div>
  );
};

export default App;
