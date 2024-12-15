import React from "react";
import FileOrFolder from "./FileOrFolder";

export default function RenderFiles({
  SubObject,
  showDeleteIcon,
  setFileState,
}) {
  const entries = Array.isArray(SubObject) ? SubObject : Object.keys(SubObject);
  return entries.map((subData, index) => (
    <div key={index}>
      <FileOrFolder
        data={subData}
        MainObject={SubObject}
        showDeleteIcon={showDeleteIcon}
        setFileState={setFileState}
      />
    </div>
  ));
}
