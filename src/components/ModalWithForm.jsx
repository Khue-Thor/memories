import React from "react";
import { XCircleFill } from "react-bootstrap-icons";

function ModalWithForm({ title, name, buttonText, closeModal, onSubmit, children }) {
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit();
  }
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-opacity-40 bg-black w-full flex justify-center items-center">
      <div className="modal w-[440px] rounded-2xl p-[10px] pt-[20px] h-[400px] relative">
        <div className="mb-5">
          <h2 className="text-3xl font-bold">{title}</h2>
          <button className="absolute top-[20px] right-[10px]" type="button" onClick={closeModal}>
            <XCircleFill className="w-5 h-5" />
          </button>
        </div>
        <form className={`modal__form modal__form-${name}`} onSubmit={handleSubmit}>
          {children}
          <button
            type="submit"
            className="modal__form-save w-[120px] bg-gray-800 p-2 rounded-xl font-medium"
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
