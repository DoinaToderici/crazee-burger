/// DEEP CLONE METHOD
// 1. structuredClone(ARAY_NAME)
// 2. JSON.parse(JSON.stringify(ARAY_NAME))

export const deepClone = (arrayName) => {
  return JSON.parse(JSON.stringify(arrayName));
};

export const FindObjectById = (id, array) => {
  return array.find((item) => item.id === id);
  // !!!if item not exist in array, the function return undifined
};

export const FindIndexById = (id, array) => {
  return array.findIndex((item) => item.id === id);
  // !!!if item not exist in array, the function return undifined
};

export const RemoveObjectById = (id, array) => {
  return array.filter((item) => item.id !== id);
  // !!!if item not exist in array, the function return undifined
};

export const isEmpty = (array) => {
  return array.length === 0;
};
