import React, { useState, useEffect, useContext } from "react";
import ModalWithForm from "./ModalWithForm";

const CardModal = ({ isLoading, onCloseModal, onAddCard }) => {
  function handleSubmit() {
    onAddCard(title, tags, descript, image);
  }
  return (
    <ModalWithForm
      title="Add Memories"
      buttonText={isLoading ? "Saving..." : "Save Change"}
      closeModal={onCloseModal}
    >
      <fieldset className="flex flex-col w-[420px] mb-8">
        <label className="modal__label">Title</label>
        <input
          type="text"
          placeholder="Card Title"
          className="modal__input mb-5 p-1"
          required
          name="name"
          id="name"
        />

        <label className="modal__label">Tags</label>
        <input
          type="text"
          placeholder="Tags"
          className="modal__input mb-5 p-1"
          required
          name="description"
          id="description"
        />

        <label className="modal__label">Description</label>
        <input
          type="text"
          placeholder="Description"
          className="modal__input mb-5 p-1"
          required
          name="description"
          id="description"
        />

        <label className="modal__label">Picture</label>
        <input
          type="text"
          placeholder="Picture URL"
          className="modal__input p-1 mb-5"
          name="avatar"
          id="avatar"
        />
      </fieldset>
    </ModalWithForm>
  );
};

export default CardModal;
