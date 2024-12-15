import React from "react";

export default function FolderArrows({ conditionToRotate }) {
  return (
    <span
      className={`inline-block hover:scale-110 duration-200 ${
        !conditionToRotate && "-rotate-90"
      }`}
    >
      {"︾"}
    </span>
  );
}
