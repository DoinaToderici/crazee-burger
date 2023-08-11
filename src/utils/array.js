/// DEEP CLONE METHOD
// 1. structuredClone(ARAY_NAME)
// 2. JSON.parse(JSON.stringify(ARAY_NAME))

export const deepClone = (arrayName) => {
  return JSON.parse(JSON.stringify(arrayName));
};
