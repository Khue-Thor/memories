import React, { useState, useEffect } from "react";
import {
  Header,
  Profile,
  Main,
  ToggleSwitch,
  EditProfileModal,
  CardAddModal,
  CardModal,
} from "./components";
import { styles } from "./styles";
import StarsCanvas from "./components/Stars";
import useLocalStorage from "use-local-storage";

const App = () => {
  const [currentTheme, setCurrentTheme] = useLocalStorage("theme" ? "dark" : "light");
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isCardAddModalOpen, setIsCardAddModalOpen] = useState(false);
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);
  const [name, setName] = useState();

  const handleEditModalOpen = () => {
    setIsEditModalOpen(true);

  };

  const handleAddCardOpen = () => {
    setIsCardAddModalOpen(true);
  }

  const handleCardModalOpen = () => {
    setIsCardModalOpen(true);
  }

  const handleModalClose = () => {
    setIsEditModalOpen(false);
    setIsCardAddModalOpen(false);
    setIsCardModalOpen(false);
  };

  const switchTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setCurrentTheme(newTheme);
  };

  useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === "Escape") {
        handleModalClose();
      }
    };

    document.addEventListener("keydown", closeByEscape);
    return () => document.removeEventListener("keydown", closeByEscape);
  }, []);

  useEffect(() => {
    function handleOverlayClose(e) {
      if (!e.target.closest(".card")) {
        handleModalClose();
      }
    }
    document.addEventListener("mousedown", handleOverlayClose);

    return () => {
      document.removeEventListener("mousedown", handleOverlayClose);
    };
  }, []);

  return (
    <div
      className={`${styles.padding} z-0 relative app black-gradient flex justify-start flex-col items-center`}
      data-theme={currentTheme}
    >
      <div className="xl:w-[1024px] lg:w-[768px] pt-5 w-[340px] min-h-screen main-app">
        <Header />
        <Profile onEditModal={handleEditModalOpen} onAddmodal={handleAddCardOpen} name={"name"} />
        <Main onCardClick={handleCardModalOpen} />
      </div>
      <StarsCanvas />
      <ToggleSwitch handleToggle={switchTheme} />
      {isEditModalOpen && <EditProfileModal onCloseModal={handleModalClose} />}
      {isCardAddModalOpen && <CardAddModal onCloseModal={handleModalClose} />}
      {isCardModalOpen && <CardModal closeModal={handleModalClose}/>}
     
    </div>
  );
};

export default App;
