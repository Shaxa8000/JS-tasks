const user = [
 {
  name: 'Eshmat',
  year: 2011,
  id: 1,
  status: 'student',
  key: 'test',
},

{
  name: 'Eshmat akasi',
  year: 2012,
  id: 2,
  status: 'programmer',
  key: 'test',
},

{
  name: 'Toshmat',
  year: 2010,
  id: 3,
  status: 'student',
  key: "test",
}
]

//<< Deleting object with current id>>>


// const onDelete = id => user.filter(value => value.id !== id);
// console.log(onDelete(2));


//<<< sorting by year>>>

// const userSort = user.sort(function (a, b) {
//   if (a.year > b.year) {
//     return 1
//   } else {
//     return -1
//   }
// })

// console.log(userSort);


// <<< sorting by name>>>

// const sortName = user.filter(function (value) {
//   if (value.name === 'Eshmat') {
//     return value;
//   }
// })

// console.log(sortName);


//<<< filtering by the status>>

// const filterStatus = user.filter(value => value.status === 'student');

// console.log(filterStatus);


//<<< Calling by key and name>>>    FILTER ADVANCED

// const filterAdvanced = (key, value) => {
//   const res = [];
//   user.map(val => {
//     if (val[key].includes(value)) {
//       for (const kalit in val) {
//         if (kalit === key) {
//           res.push(val)
//         }
//       }
//     }
//   })
//   return res;
// };

// console.log(filterAdvanced('name', "Eshmat"));





// // Animal properties and method encapsulation
// var Animal = {
//   type: 'Invertebrates', // Default value of properties
//   displayType: function() {  // Method which will display type of Animal
//     console.log(this.type);
//   }
// };

// // Create new animal type called animal1
// var animal1 = Object.create(Animal);
// animal1.displayType(); // Output:Invertebrates

// // Create new animal type called Fishes
// var fish = Object.create(Animal);
// fish.type = 'Fishes';
// fish.displayType(); // Output:Fishes




















