import React from "react";

export default function CRUD_icon({ iconName, onClick }) {
  return (
    <img
      className="size-8 cursor-pointer"
      src={`${iconName}.svg`}
      alt={iconName}
      onClick={onClick}
    />
  );
}
