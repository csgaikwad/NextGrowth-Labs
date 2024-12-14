import React from "react";

export default function File({ title }) {
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
      <img className="size-6" src={`${icon}.svg`} alt={`${icon}`} />
      <span>{title}</span>
    </div>
  );
}
