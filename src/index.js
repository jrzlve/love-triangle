/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let triangleCounter = 0;
  let arrLength = preferences.length;

  for(let i =0; i<arrLength; i++){
    let variable1 = preferences[i] - 1;
    if (variable1 == i)
      continue;

    let variable2 = preferences[variable1] - 1;
    if (variable1 == variable2)
      continue;

    let variable3 = preferences[variable2] - 1;
    if (variable2 == variable3)
      continue;

      if (variable3 == i) triangleCounter++;
  }
  return triangleCounter / 3;
};
