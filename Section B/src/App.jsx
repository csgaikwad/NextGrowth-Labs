import React, { useEffect, useState } from "react";
import "./App.css";
import FileOrFolder from "./utils/FileOrFolder";
import sortJsonObject from "./utils/sortJsonObject";
import DisplayContext from "./context/DisplayContext";
import JsonData from "./components/JsonData";
import CRUD_icon from "./components/CRUD_icon";
import FolderArrows from "./components/FolderArrows";

export default function App() {
  const FileStructure = sortJsonObject(JsonData);

  const [FileState, setFileState] = useState(FileStructure);

  const [displayAllData, setDisplayAllData] = useState(true);

  const [showDeleteIcon, setShowDeleteIcon] = useState(true);

  useEffect(() => {
    console.log(FileState);
  }, [FileState]);

  return (
    <DisplayContext.Provider value={{ displayAllData, setDisplayAllData }}>
      <div className="min-h-[30rem] sm:m-[1rem_5rem] px-6 py-2 bg-indigo-900 text-white">
        <div className="flex py-2">
          <div
            className="cursor-pointer"
            onClick={() => setDisplayAllData(!displayAllData)}
          >
            <FolderArrows conditionToRotate={displayAllData} />
            <span className="m-2 text-center">Evaluation</span>
          </div>
          <div className="flex ml-10  items-center gap-2">
            <CRUD_icon iconName={"add-file"} />
            <CRUD_icon iconName={"add-folder"} />
            <CRUD_icon
              iconName={"dustbin"}
              onClick={() => {
                setShowDeleteIcon(!showDeleteIcon);
              }}
            />
          </div>
        </div>
        {Object.keys(FileState).map((data, index) => {
          return (
            <div key={index}>
              <FileOrFolder
                data={data}
                MainObject={FileState}
                showDeleteIcon={showDeleteIcon}
                setFileState={setFileState}
              />
            </div>
          );
        })}
      </div>
    </DisplayContext.Provider>
  );
}
