import React, { useState, useEffect, useContext } from "react";
import ModalWithForm from "./ModalWithForm";

const EditProfileModal = ({ isOpen, isLoading, onEditProfile, onCloseModal }) => {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [desc, setDesc] = useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleAvatarChange(e) {
    setAvatar(e.target.value);
  }

  function handleDescChange(e) {
    setDesc(e.target.value);
  }

  function handleSubmit() {
    onEditProfile(name, desc, avatar);
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
        <input
          type="text"
          placeholder="Your name"
          className="modal__input mb-5 p-1"
          required
          name="name"
          id="name"
          onChange={handleNameChange}
        />

        <label className="modal__label">Description</label>
        <input
          type="text"
          placeholder="Short description"
          className="modal__input mb-5 p-1"
          required
          name="description"
          id="description"
          onChange={handleDescChange}
        />

        <label className="modal__label">Picture</label>
        <input
          type="text"
          placeholder="Picture URL"
          className="modal__input p-1 mb-5"
          name="avatar"
          id="avatar"
          onChange={handleAvatarChange}
        />
        <input type="file" id="file" name="file" className="cursor-pointer" />
      </fieldset>
    </ModalWithForm>
  );
};

export default EditProfileModal;
