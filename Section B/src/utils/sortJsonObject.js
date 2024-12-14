export default function sortObjectKeys(obj) {
  if (obj && typeof obj === "object") {
    if (Array.isArray(obj)) {
      return obj.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
    }

    return Object.keys(obj)
      .sort()
      .reduce((acc, key) => {
        acc[key] = sortObjectKeys(obj[key]);
        return acc;
      }, {});
  }
  return obj;
}
