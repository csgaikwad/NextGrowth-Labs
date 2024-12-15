import React, { useState } from "react";
import Folder from "../components/Folder";
import File from "../components/File";

export default function FileOrFolder({
  data,
  MainObject,
  showDeleteIcon,
  setFileState,
}) {
  // console.log(data, MainObject);
  return (
    <>
      {data in MainObject &&
      typeof MainObject[data] === "object" &&
      MainObject[data] !== null ? (
        <Folder
          title={data}
          SubObject={MainObject[data]}
          showDeleteIcon={showDeleteIcon}
          setFileState={setFileState}
        />
      ) : (
        <File
          title={data}
          showDeleteIcon={showDeleteIcon}
          setFileState={setFileState}
        />
      )}
    </>
  );
}
