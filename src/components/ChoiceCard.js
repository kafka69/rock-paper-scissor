import React from "react";

function ChoiceCard({ gameItem, handleGameItemChange }) {
  const { url, name } = gameItem;
  return (
    <img
      onClick={() => {
        console.log("item name in choice",name);
        handleGameItemChange({id: gameItem.id,winItemIds:gameItem.winItemIds,name: name});
        // "Your code here";
      }}
      className="choice"
      src={url}
      alt={name}
    />
  );
}

export default ChoiceCard;
