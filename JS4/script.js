// Removing leading zeros

// function myFunc() {
//     const numStr = '123.000';
//     var number = Number(numStr);
//     console.log(number);
// }

// myFunc();

// 2
 

// function myFunc() {
//     const numStr = "00402";
//     var number = Number(numStr);
//     console.log(number);
// }

// myFunc();


//3

// function myFunc() {
//     const numStr = "03.1400";
//     var number = Number(numStr);
//     console.log(number);
// }

// myFunc();


// 2-TASK BY USING new Set();

// function myArr(arr) {
//     return new Set(arr).size == 1;
//     if (arr.size == 1) {
//         console.log(true)
//     } else {
//         console.log(false)
//     }
// }

// console.log(myArr(["a", "a", "a", "a"]));
// console.log(myArr(['a', 'a', 'b', 'a']));





//  BY USING FOR LOOP

// function isEqual(arr) {
//     var first = arr[0];
//     for (let i = 1; i < arr.length; i++){
//         if (first !== arr[i]) {
//           return false;
//         }
//     }
//     return true;
// }

// console.log(isEqual(['a', 'a', 'a', 'a']));
// console.log(isEqual(['a', 'a', 'b', 'a']));


// 3- TASK

// reversedNum = (n) => {
//     n = n + "";
//     return n.split("").reverse().join("");

// }
  
// console.log(reversedNum(123));

//  4 -TASK




//REVERSE A STRING

// reversStr = (str) => {
//     var strSplit = str.split("");
//     var strReverse = strSplit.reverse();
//     var strJoin = strReverse.join('');
//     return strJoin
// }
// console.log(reversStr("Hello"));

// ADDING REVERSED AND DEFAULT VALUE

// reversStr = (str) => {
//     var strSplit = str.split("");
//     var strReverse = strSplit.reverse();
//     var strJoin = strReverse.join('');
//     var strConcat = strJoin.concat(str);
//     return strConcat
// }
// console.log(reversStr("Hello"));















