import React from "react";
import Folder from "../components/Folder";
import File from "../components/File";

export default function FileOrFolder({ data, MainObject }) {
  // console.log(data, MainObject);

  return (
    <>
      {data in MainObject &&
      typeof MainObject[data] === "object" &&
      MainObject[data] !== null ? (
        <Folder title={data} SubObject={MainObject[data]} />
      ) : (
        <File title={data} />
      )}
    </>
  );
}
