//First Project

//Making a function that sorts an array
function arraySorter(array) {
  array = [3, 6, 2, 4];
  //making a loop that will compare index 1 and 0 of the array and then 2 and 1 until the last index which is i-1
  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (array[i] < array[j]) {
        let x = array[i];
        array[i] = array[j];
        array[j] = x;
      }
    }
  }
  return array;
}
// Our Array
let array = [3, 6, 2, 4];
//recalling the function
console.log("Unsorted Array:", array, "Sorted Array:", arraySorter(array));
// Second Project

function Star(numOfStars) {
  numOfStars = 3;
  let char = "*";
  //A loop that will put * until it reaches the numOfStars
  for (let i = 0; i <= numOfStars - 1; i++) {
    let outPut = "";
    for (let j = 0; j <= i; j++) {
      outPut += char;
    }
    console.log(outPut);
  }
  //A loop that will do the upside of the other loop
  for (let i = numOfStars - 1; i > 0; i--) {
    let outPut = "";
    for (let j = 0; j < i; j++) {
      outPut += char;
    }
    console.log(outPut);
  }
}
Star();

// Third Project