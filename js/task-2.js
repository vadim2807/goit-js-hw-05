function makeArray(firstArray, secondArray, maxLength) {
    let i = 0;
    let thirdArray = [];
    while(i < maxLength && i < firstArray.length) {
      thirdArray.push(firstArray[i]);
      i++;
    }
  let j = 0;
  while (thirdArray.length < maxLength && j < secondArray.length) {
    thirdArray.push(secondArray[j]);
    j++;
  }

  return thirdArray;
}

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []

console.log("----------------------");
