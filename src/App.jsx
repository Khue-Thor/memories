import React, { useState, useEffect } from "react";
import {
  Header,
  Profile,
  Main,
  ToggleSwitch,
  EditProfileModal,
  CardAddModal,
  CardModal,
  Login,
} from "./components";
import { styles } from "./styles";
import StarsCanvas from "./components/Stars";
import useLocalStorage from "use-local-storage";
import { profileimage } from "./assets";

const App = () => {
  const [currentTheme, setCurrentTheme] = useLocalStorage("theme", "dark");
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isCardAddModalOpen, setIsCardAddModalOpen] = useState(false);
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [card, setCard] = useState([]);

  const handleEditModalOpen = () => {
    setIsEditModalOpen(true);
  };

  const handleAddCardOpen = () => {
    setIsCardAddModalOpen(true);
  };

  const handleCardModalOpen = () => {
    setIsCardModalOpen(true);
  };

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
      if (!e.target.closest(".item-modal")) {
        handleModalClose();
      }
    }
    document.addEventListener("mousedown", handleOverlayClose);

    return () => {
      document.removeEventListener("mousedown", handleOverlayClose);
    };
  }, []);

  const cardData = [
    {
      title: "Card 1",
      image: "path/to/image1.jpg",
      description: "This is card 1 description.",
    },
    {
      title: "Card 2",
      image: "path/to/image2.jpg",
      description: "This is card 2 description.",
    },
    {
      title: "Card 3",
      image: "path/to/image3.jpg",
      description: "This is card 3 description.",
    },
  ];

  function handleAddCardSubmit(data) {
    setIsLoading(true);
    setCard([...card, cardData]);
    handleModalClose();
    setIsLoading(false);
  }

  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [desc, setDesc] = useState("");

  const handleEditProfile = (e) => {};

  return (
    <div
      className={`${styles.padding} z-0 relative app black-gradient flex justify-start flex-col items-center`}
      data-theme={currentTheme}
    >
      <div className="xl:w-[1024px] lg:w-[768px] pt-5 w-[340px] min-h-screen main-app">
        <Header placeholder="Search" />
        <Profile
          onEditModal={handleEditModalOpen}
          onAddmodal={handleAddCardOpen}
          name={name}
          desc={desc}
          photo={avatar}
        />
        <Main onCardClick={handleCardModalOpen} cards={card} />
      </div>
      <StarsCanvas />
      <ToggleSwitch handleToggle={switchTheme} />
      {isEditModalOpen && (
        <EditProfileModal onCloseModal={handleModalClose} onEditProfile={handleEditProfile} />
      )}
      {isCardAddModalOpen && (
        <CardAddModal
          onCloseModal={handleModalClose}
          onAddCard={handleAddCardSubmit}
          isLoading={isLoading}
        />
      )}
      {isCardModalOpen && <CardModal closeModal={handleModalClose} />}
      <Login/>
    </div>
  );
};

export default App;
