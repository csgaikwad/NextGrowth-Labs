import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import RenderFiles from "../utils/RenderFiles";
import DisplayContext from "../context/DisplayContext";

export default function Folder({ title, SubObject }) {
  const { displayAllData, setDisplayAllData } = useContext(DisplayContext);

  const [displayFiles, setDisplayFiles] = useState(displayAllData);

  useEffect(() => {
    setDisplayFiles(displayAllData);
  }, [displayAllData]);
  return (
    <div className="folder">
      <div
        className="cursor-pointer inline-block"
        onClick={() => setDisplayFiles(!displayFiles)}
      >
        <span
          className={`inline-block hover:scale-110 duration-200 mr-1 ${
            !displayFiles && "-rotate-90"
          }`}
        >
          {"︾"}
        </span>
        <span className="emoji">📁</span>
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
        <RenderFiles SubObject={SubObject} />
      </motion.div>
    </div>
  );
}
