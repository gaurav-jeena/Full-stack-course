// const  products = [
//     { name: 'Laptop', price: 1000 },
//     { name: 'Phone', price: 500 },
//     { name: 'Tablet', price: 300 }, 
//     { name: 'Monitor', price: 200 },
// ];

// const nproducts = products.filter((currelement) => {
//     return currelement.price < 500;
// });
//  console.log(nproducts);    

// square of array elements:

// const number = [1,2,3,4,5,6,7,8,9,10];

// let result = number.map((currelement) => currelement * currelement);
// console.log(result); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]


//!array uppercase

// const fruits = ['apple', 'banana', 'orange', 'kiwi', 'mango'];  

// const nfruits = fruits.map((currelement) => {
//   return currelement.toUpperCase(); 
// } );

// console.log(nfruits); // ['APPLE', 'BANANA', 'ORANGE', 'KIWI', 'MANGO']


// square of array element if they are even :


// const number = [1,2,3,4,5,6,7,8,9,10];

// let result = number.map((currelement) => {
// if (currelement % 2 == 0) 
//     {
//             return currelement * currelement;
//         }

// }).filter((currelement) =>   currelement != undefined);
// console.log(result)


//  prefix before the element of array:

const Name = ['sachin', 'saurabh', 'siddharth', 'satyam', 'shubham'];
 const nname = Name.map((currentelement) => `Mr. ${currentelement}`);
 console.log(nname);