export function removeFile(object, valueToRemove) {
  const newObject = { ...object };

  for (const key in newObject) {
    if (Array.isArray(newObject[key])) {
      newObject[key] = newObject[key].filter((item) => item !== valueToRemove);
    } else if (typeof newObject[key] === "object" && newObject[key] !== null) {
      newObject[key] = removeFile(newObject[key], valueToRemove);
    }
  }
  return newObject;
}

export function removeFolder(object, keyToRemove) {
  const newObject = { ...object };
  for (const key in newObject) {
    if (key === keyToRemove) {
      delete newObject[key];
      return newObject;
    }
    if (typeof newObject[key] === "object") {
      if (Array.isArray(newObject[key])) {
        newObject[key] = newObject[key].filter((item) => item !== keyToRemove);
      } else {
        newObject[key] = removeFolder(newObject[key], keyToRemove);
      }
    }
  }
  return newObject;
}
