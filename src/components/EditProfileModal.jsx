import React, {useState, useEffect, useContext} from "react";
import ModalWithForm from "./ModalWithForm";

const EditProfileModal = ({ isOpen, isLoading, onEditProfile, onCloseModal }) => {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  function handleSubmit(e) {
    onEditProfile(name, avatar);
  
  }
  return (
    <ModalWithForm
      title="Edit Profile"
      buttonText={isLoading ? "Saving..." : "Save Change"}
      closeModal={onCloseModal}
      onSubmit={handleSubmit}
    >
      <fieldset className="flex flex-col">
        <label>Name</label>
        <input type="text" placeholder="Your name"/>
      </fieldset>
    </ModalWithForm>
  );
};

export default EditProfileModal;
