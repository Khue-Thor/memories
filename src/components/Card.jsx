import React, { useState } from "react";
import { waterfall } from "../assets";
import { HandThumbsUp, HandThumbsUpFill } from "react-bootstrap-icons";
const Card = ({ card, onCardClick, onRemoveClick, onLikeClick }) => {
  const [isLiked, setIsLiked] = useState(false);
  const handleLikeToggle = () => {
    setIsLiked(true);
  };
  const handleDisliked = () => {
    setIsLiked(false);
  };
  return (
    <div className="w-[320px] h-[430px] card rounded-xl overflow-hidden mb-5">
      <div className="h-[256px] relative cursor-pointer" onClick={onCardClick}>
        <img src={waterfall} alt="" className="h-[310px] w-[320px]" />
        <div className="absolute top-3 left-3">
          <h3 className="text-xl">Mark</h3>
          <p>2 months</p>
        </div>
      </div>
      <div className="mt-[70px] ml-2 relative">
        <h2 className=" text-3xl">Waterfall</h2>
        <p>#waterfall</p>
        <div className="flex justify-between">
          <button className="like-bg"></button>
        </div>
        {isLiked ? (
          <HandThumbsUpFill className="w-7 h-7 mt-2 cursor-pointer" onClick={handleDisliked} />
        ) : (
          <HandThumbsUp className="w-7 h-7 mt-2 cursor-pointer" onClick={handleLikeToggle} />
        )}
      </div>
    </div>
  );
};

export default Card;
