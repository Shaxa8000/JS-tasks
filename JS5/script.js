// callback function

function greeting(name) {
  alert('Hello ' + name);
}

function processUserInput(callback) {
  var name = prompt('Please enter your name.');
  callback(name);
}

processUserInput(greeting);

// function str() {
//     var a = "123";
//     newStr = '';
//     for (let i = a.length; i >= 0; i--) {
//         newStr += a[i];
//     }
//     return newStr
// }

// console.log(str());

let fruits = ['Apple', 'Banana']

console.log(fruits.length)
// 2

let first = fruits[0]
// Apple

let last = fruits[fruits.length - 1]
// Banana

fruits.forEach(function(item, index, array) {
  console.log(item, index)
})
// Apple 0
// Banana 1



