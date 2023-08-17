/// DEEP CLONE METHOD
// 1. structuredClone(ARAY_NAME)
// 2. JSON.parse(JSON.stringify(ARAY_NAME))

export const deepClone = (arrayName) => {
  return JSON.parse(JSON.stringify(arrayName));
};

export const FindInArray = (id, array) => {
  return array.find((item) => item.id === id);
  // !!!if item not exist in array, the function return undifined
};
