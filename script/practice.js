let myArray = [1,2,3];
let theSameArray = new Array(1,2,3)
console.log(theSameArray);
myArray[1]=20;

myArray=["string",10,false];
console.log(myArray);

// exercise 1
// You must define an array with the following three variables:

// 1. A string which has the value of "What is the meaning of life?"
// 2. A number which has a value of 42
// 3. A boolean which has a value of true

let otherArray= [1,2,3];

otherArray=["What is the meand of life?", 42, true];
console.log(otherArray);

const numbers = [10,20,30,40,50];
console.table(numbers);

const months=["jan", "feb", "mar", "apr", "may",];
console.table(months);
for(let i=0; i<months.length; i++) {
    console.log(months[i]);
}

// access to the values in the array

console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers.length);

numbers.push(60,70,80);
numbers.unshift(-10,-20,-30);
console.table(numbers);

months.pop();
months.shift();
months.splice(1,1);// (index,#)
console.table(months)