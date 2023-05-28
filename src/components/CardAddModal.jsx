import React, { useState, useEffect, useContext } from "react";
import ModalWithForm from "./ModalWithForm";

const CardAddModal = ({ isLoading, onCloseModal, onAddCard }) => {
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
          minLength="1"
          maxLength="30"
        />

        <label className="modal__label">Tags</label>
        <input
          type="text"
          placeholder="Tags"
          className="modal__input mb-5 p-1"
          required
          name="description"
          id="description"
          minLength="1"
          maxLength="30"
        />

        <label className="modal__label">Description</label>
        <input
          type="text"
          placeholder="Description"
          className="modal__input mb-5 p-1"
          required
          name="description"
          id="description"
          minLength="1"
          maxLength="200"
        />

        <label className="modal__label">Picture</label>
        <input
          type="url"
          placeholder="Picture URL"
          className="modal__input p-1 mb-5"
          name="avatar"
          id="avatar"
        />
      </fieldset>
    </ModalWithForm>
  );
};

export default CardAddModal;
