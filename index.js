let express = require("express");
let app = express();

// array of number
let numbers = [1,2,3,4];
//let numbers1 = [1,2,3,4,5];

// array of string
let strings = ["hello", "Mohd", " Sohail", "Learn"];


// function add a number in array
function addNumberToArr(numArr, num) {
  numArr.push(num);
  return numArr;
}

// Question 1: Add a Number to an Array of Numbers
app.get('/numbers/add', (req, res) => {
  let result = addNumberToArr(numbers, 6);

  res.json(result);
});

// function to add string in array
function addString(strArr, str) {
  strArr.push(str);
  return strArr;
}

// Question 2: Add a String to an Array of Strings
app.get('/strings/add', (req, res) => {
  let result = addString(strings, "express");

  res.json(result);
});

// function to sum of array
function arrOfSum(number) {
  let sum = 0;
  for(let i = 0; i < number.length; i++) {
    sum += number[i];
  }
  return sum;
}

app.get('/numbers/sum', (req, res) => {
  let result = arrOfSum(numbers);

  res.json({sum: result});
});

// function to find maximum in array
function findMax(number) {
  let max = number[0];
  for(let i = 1; i < number.length; i++) {
    if (number[i] > max) {
         max = number[i];
    }
  }
  return max;
}

// Question 4 : Find the Maximum Number in an Array
app.get('/numbers/max', (req, res) => {
  let result = findMax(numbers);

  res.json({max: result});
})

let port = 8000;
app.listen(port, () => {
  console.log("server is running on the port number is: " + port);
})