var fruits = ["Apple", 12, 'Banana', 'Orange', 'Mango'];
var numbers = [10, 5, 11,'apple', 2, 3, 4, 5];



// FINDING A AND B IN THE ARRAY

// a

// var str = fruits.toString();
// var lengthOf = str.match(/a/gi).length;

// console.log(`a = ${lengthOf}`);


// b

// var str = fruits.toString();
// var lengthOf = str.match(/b/gi).length;

// console.log(`b = ${lengthOf}`);



// FINDING SUM OF numbers 
// const sumOfArr = () => {
//     var sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         if (typeof numbers[i] === 'number') {
//             sum += numbers[i]
//         } else {
//             continue
//       }
//     }
//     console.log(sum);
// }

sumOfArr();



// FINDING SUM OF ODD AND EVEN NUMBERS
// even

// const sumOfArr = () => {
//     var sum = 0;
//     for (let i = 0; i < numbers.length; i+=2) {
//         if (numbers[i] === "number") {
//             return numbers[i]
//       }
//       sum += numbers[i];
//     }
//     console.log(sum);
// }

// sumOfArr();


// odd 
// const num = [2, 4, 5, 7, 2, 8]
// const sumofArr = () => {
//     var sum = 0;
//     for (let i = 1; i < num.length; i+=2) {
//       sum += num[i];
//     }
//     console.log(sum);
// }
// sumofArr();


// Finding the second highest and second lowest value

//second biggest:
// const number = [2, 15, 76, 81, 17];
// const num = number.sort((a, b) => b - a)
// console.log(num[1]);



//second lowest

// const number = [2, 15, 76, 81, 17];
// const num = number.sort((a, b) => a - b);
// console.log(num[1]);


