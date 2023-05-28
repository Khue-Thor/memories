import React from "react";
import { waterfall } from "../assets";
import { XCircleFill } from "react-bootstrap-icons";
const CardModal = ({ desc, closeModal }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-opacity-40 bg-black w-full flex justify-center items-center">
      <div className="lg:w-[850px] lg:h-[640px] bg-red-500 card flex overflow-hidden rounded-xl relative">
        <button className="absolute top-[10px] left-[10px]" type="button" onClick={closeModal}>
          <XCircleFill className="w-5 h-5" />
        </button>
        <div className="h-[640px]">
          <img src={waterfall} className="lg:w-[520px] lg:h-[640px]" />
        </div>
        <div className="lg:w-[330px] m-[10px]">
          <p>
            {desc}
            picture. / (ˈpɪktʃə) / noun. a visual representation of something, such as a person or
            scene, produced on a surface, as in a photograph, painting, etc. (as modifier)picture
            gallery; picture postcard Related adjective: pictorial.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardModal;
