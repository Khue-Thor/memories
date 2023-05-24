import React from "react";

function ModalWithForm({ title, name, buttonText, closeModal, onSubmit, children }) {
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit();
  }
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-opacity-40 bg-black w-full flex justify-center items-center">
      <div className="modal w-[440px] bg-opacity-40 bg-blue-900 rounded-2xl p-3 h-[400px]">
        <div className="">
          <h2 className="">{title}</h2>
          <button className="modal__close" type="button" onClick={closeModal} />
        </div>
        <form className={`modal__form modal__form-${name}`} onSubmit={handleSubmit}>
          {children}
          <button type="submit" className="modal__form-save">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;