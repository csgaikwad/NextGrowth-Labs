import React, { useEffect, useState } from "react";
import "./App.css";
import FileOrFolder from "./utils/FileOrFolder";
import sortJsonObject from "./utils/sortJsonObject";
import DisplayContext from "./context/DisplayContext";

export default function App() {
  const JsonData = {
    Documents: ["Document1.jpg", "Document2.jpg", "Document3.jpg"],
    Desktop: ["Screenshot1.jpg", "videopal.mp4"],
    Downloads: {
      Drivers: ["Printerdriver.dmg", "cameradriver.dmg"],
      Applications: [
        "Webstorm.dmg",
        "Pycharm.dmg",
        "FileZila.dmg",
        "Mattermost.dmg",
      ],
      "chromedriver.dmg": null,
    },
  };

  const FileStructure = sortJsonObject(JsonData);

  const [displayAllData, setDisplayAllData] = useState(true);

  return (
    <DisplayContext.Provider value={{ displayAllData, setDisplayAllData }}>
      <div className="min-h-[30rem] sm:m-[1rem_5rem] px-6 py-2 bg-indigo-900 text-white">
        <div className="flex py-2">
          <div
            className="cursor-pointer"
            onClick={() => setDisplayAllData(!displayAllData)}
          >
            <span
              className={`inline-block hover:scale-110 duration-200 ${
                !displayAllData && "-rotate-90"
              }`}
            >
              {"︾"}
            </span>
            <span className="m-2 text-center">Evaluation</span>
          </div>
          <div className="flex ml-10  items-center gap-2">
            <img
              className="size-7 cursor-pointer"
              src="/add-file.svg"
              alt="Add file"
            />
            <img
              className="size-8 cursor-pointer"
              src="/add-folder.svg"
              alt="Add folder"
            />
          </div>
        </div>
        {Object.keys(FileStructure).map((data, index) => {
          return (
            <div key={index}>
              <FileOrFolder data={data} MainObject={FileStructure} />
            </div>
          );
        })}
      </div>
    </DisplayContext.Provider>
  );
}
