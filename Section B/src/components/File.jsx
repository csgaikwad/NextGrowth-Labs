import React from "react";
import { removeFile } from "../utils/removeData";

export default function File({ title, showDeleteIcon, setFileState }) {
  const extension = title.split(".")[1];
  var icon;
  switch (extension) {
    case "jpg":
      icon = "image-icon";
      break;
    case "mp4":
      icon = "play-button";
      break;
    case "dmg":
      icon = "hamburger-icon";
      break;
    default:
      icon = "other-icon";
  }

  // console.log(title);
  return (
    <div className="file">
      {showDeleteIcon ? (
        <span
          className="delete-icon"
          onClick={() => {
            setFileState((prevState) => removeFile(prevState, title));
          }}
        >
          ❌
        </span>
      ) : (
        <span className="w-[1.4rem]"></span>
      )}
      <img className="size-6" src={`${icon}.svg`} alt={`${icon}`} />
      <span>{title}</span>
    </div>
  );
}
