import React, { useState, useEffect, useContext } from "react";
import ModalWithForm from "./ModalWithForm";

const CardAddModal = ({ isLoading, onCloseModal, onAddCard, isOpen }) => {
  const [cardTitle, setCardTitle] = useState("");
  const [cardTags, setCardTags] = useState("");
  const [cardDesc, setCardDesc] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    setCardTitle("");
    setCardTags("");
    setCardDesc("");
    setImageUrl("");
  }, [isOpen]);

  function handleTitleChange(e) {
    setCardTitle(e.target.value);
  }

  function handleTagsChange(e) {
    setCardTags(e.target.value);
  }

  function handleDescChange(e) {
    setCardDesc(e.target.value);
  }

  function handleImageChange(e) {
    setImageUrl(e.target.value);
  }

  function handleSubmit() {
    onAddCard(cardTitle, cardTags, cardDesc, imageUrl);
  }
  return (
    <ModalWithForm
      title="Add Memories"
      buttonText={isLoading ? "Saving..." : "Save Change"}
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
          value={cardTitle}
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
          value={cardTags}
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
          value={cardDesc}
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
