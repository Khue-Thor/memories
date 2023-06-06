import React, { useState, useEffect, useContext } from "react";
import ModalWithForm from "./ModalWithForm";

const CardAddModal = ({ isLoading, onCloseModal, onAddCard, isOpen }) => {
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [desc, setDesc] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    setTitle("");
    setTag("");
    setDesc("");
    setImageUrl("");
  }, [isOpen]);

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleTagsChange(e) {
    setTag(e.target.value);
  }

  function handleDescChange(e) {
    setDesc(e.target.value);
  }

  function handleImageChange(e) {
    setImageUrl(e.target.value);
  }

  function handleSubmit() {
    onAddCard(title, tag, desc, imageUrl);
  }
  return (
    <ModalWithForm
      title="Add Memories"
      buttonText={isLoading ? "Posting..." : "Start Posting"}
      closeModal={onCloseModal}
      onSubmit={handleSubmit}
      onAddCard={onAddCard}
    >
      <fieldset className="flex flex-col w-[420px] mb-8">
        <label className="modal__label">Title</label>
        <input
          type="text"
          placeholder="Card Title"
          className="modal__input mb-5 p-1"
          required
          value={title}
          name="name"
          id="name"
          minLength="1"
          maxLength="30"
          onChange={handleTitleChange}
        />

        <label className="modal__label">Tags</label>
        <input
          type="text"
          placeholder="Tags"
          className="modal__input mb-5 p-1"
          required
          value={tag}
          name="description"
          id="description"
          minLength="1"
          maxLength="30"
          onChange={handleTagsChange}
        />

        <label className="modal__label">Description</label>
        <input
          type="text"
          placeholder="Description"
          className="modal__input mb-5 p-1"
          required
          value={desc}
          name="description"
          id="description"
          minLength="1"
          maxLength="200"
          onChange={handleDescChange}
        />

        <label className="modal__label">Picture</label>
        <input
          type="url"
          placeholder="Picture URL"
          className="modal__input p-1 mb-5"
          value={imageUrl}
          name="avatar"
          id="avatar"
          onChange={handleImageChange}
        />
      </fieldset>
    </ModalWithForm>
  );
};

export default CardAddModal;
