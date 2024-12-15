import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import RenderFiles from "../utils/RenderFiles";
import DisplayContext from "../context/DisplayContext";
import { removeFolder } from "../utils/removeData";
import FolderArrows from "./FolderArrows";

export default function Folder({
  title,
  SubObject,
  showDeleteIcon,
  setFileState,
}) {
  const { displayAllData } = useContext(DisplayContext);

  const [displayFiles, setDisplayFiles] = useState(displayAllData);

  useEffect(() => {
    setDisplayFiles(displayAllData);
  }, [displayAllData]);

  return (
    <div className="folder">
      <div
        className="cursor-pointer flex w-fit"
        onClick={() => {
          setDisplayFiles(!displayFiles);
        }}
      >
        <div className="w-6">
          {showDeleteIcon ? (
            <span
              className="delete-icon"
              onClick={(e) => {
                e.stopPropagation();
                setFileState((prevState) => removeFolder(prevState, title));
              }}
            >
              ❌
            </span>
          ) : (
            <FolderArrows conditionToRotate={displayFiles} />
          )}
        </div>
        <span className="mr-1">📁</span>
        <span className="my-1 text-center">{title}</span>
      </div>
      {/* Framer Motion for smooth expand/collapse */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={
          displayFiles
            ? { height: "auto", opacity: 1 }
            : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.15, ease: "easeInOut" }}
        className="ml-5 overflow-hidden"
      >
        <RenderFiles
          SubObject={SubObject}
          showDeleteIcon={showDeleteIcon}
          setFileState={setFileState}
        />
      </motion.div>
    </div>
  );
}
