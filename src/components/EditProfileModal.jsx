import React, { useState, useEffect, useContext } from "react";
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
      <fieldset className="flex flex-col w-[420px] mb-8">
        <label className="modal__label">Name</label>
        <input type="text" placeholder="Your name" className="modal__input mb-5 p-1" />
        <label className="modal__label">Description</label>
        <input
          type="text"
          placeholder="Short description"
          className="modal__input mb-5 p-1"
        />
        <label className="modal__label">Picture</label>
        <input type="text" placeholder="Picture URL" className="modal__input p-1" />
      </fieldset>
    </ModalWithForm>
  );
};

export default EditProfileModal;
