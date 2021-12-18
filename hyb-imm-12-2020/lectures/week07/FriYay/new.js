// const myforEach = () => {
//   for (let i = 0; i < myArray.length; i++){
//     console.log(myArray[i]);
//   }
// }

// const myArray = [1, 3, 5, 7];

// myforEach(myArray)
// myArray.forEach((e) => {
//   console.log(e);
// });



//map

// const myArray = [1, 2, 3, 4, 5, 6];
// // const mapArr = myArray.map(num => num - 10);
// // console.log(mapArr);

// const myMap = () => {
//   let newArr = [];
//   for (let i = 0; i < myArray.length; i++){
//     result = myArray[i] - 10;
//     newArr = [...newArr, result]  //newArr = []  loop1 = [-9]    loop2 = [-9,-8]    loop3=[-9,-8,-7]   loop4=[-9,-8,-7,-6]
//   }
//   console.log(newArr)
// }

// myMap(myArray);

//SORT
const myArray = [6, 5, 4, 3, 2, 1];  // loop1 6>5 = y [5,6]  loop2-1 6>4=y loop2-2 5>4=y [4,5,6]
// const myArray = [1,2, 3, 4, 5, 6];

// const ascend = myArray.sort();
// console.log(ascend);

const mySort = (arr) => {
  for (let j = 0; j < arr.length - 1; j++) {
    for (let i = 0, swapping; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        swapping = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = swapping;
      };
    };
  };
  return arr;
}
console.log(mySort(myArray));

