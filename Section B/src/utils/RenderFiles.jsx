import React from "react";
import FileOrFolder from "./FileOrFolder";

export default function RenderFiles({SubObject}) {
  const entries = Array.isArray(SubObject) ? SubObject : Object.keys(SubObject);
  return entries.map((subData, index) => (
    <div key={index}>
      <FileOrFolder data={subData} MainObject={SubObject} />
    </div>
  ));
}
