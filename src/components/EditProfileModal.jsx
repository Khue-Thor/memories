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
      <fieldset>
        <label>Name</label>
      </fieldset>
    </ModalWithForm>
  );
};

export default EditProfileModal;
