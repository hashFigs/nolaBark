import React, { useState } from "react";
import Modal from "react-modal";

export default function addPetModal(props) {
  let [isOpen, setIsOpen] = useState(false);

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <>
      <Modal
        isOpen={props.isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
      >
        <h1>Pet Info Content</h1>
        <form>
          <label
            htmlFor="petname"
            className="text-gray-500 font-light mt-8 dark:text-gray-50"
          >
            Pet Name<span className="text-red-500 dark:text-gray-50">*</span>
          </label>

          <input
            type="text"
            value={petName}
            onChange={(e) => {
              setPetName(e.target.value);
            }}
            name="fullname"
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
          />
          <br></br>
          <br></br>

          <label
            htmlFor="petSize"
            className="text-gray-500 font-light mt-8 dark:text-gray-50"
          >
            Pet Size<span className="text-red-500 dark:text-gray-50">*</span>
          </label>

          <input
            type="text"
            value={petSize}
            onChange={(e) => {
              setPetSize(e.target.value);
            }}
            name="petSize"
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
          />
          <br></br>
          <br></br>
        </form>

        <button onClick={() => setIsOpen(false)}>Close Modal</button>
        <button
          className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          onClick={() => savePet()}
        >
          Save Pet
        </button>
      </Modal>
    </>
  );
}
