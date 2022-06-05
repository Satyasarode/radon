const express = require('express');
const lodash = require('lodash')
const myHelper = require('../logger/logger')
const myHelper1 = require('../util/helper')
const myHelper2 = require('../validator/formatter')

const router = express.Router();

router.get('/test-me', function (req, res) {
    myHelper.welcome()
    myHelper1.printMonth()
   myHelper1.currentDate()
    myHelper1.xyz()
    myHelper2.lowercase()
    myHelper2.uppercase()
    myHelper2.abc()

    res.send('My first ever api!')
});

router.get('/hello', function (req, res) {
    //Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements

    const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
const array1 = lodash.chunk(months, 2)
console.log(array1)

//Gets all but the first element of array.
const numbers = [1,3,5,7,9,11,13,15,17,19]
const array2 = lodash.tail(numbers)
console.log(array2)

//this method returns an object composed from key-value pairs.
const movies = [['horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']]
const array3 = lodash.fromPairs(movies)
console.log(array3)

//Creates an array of unique values, in order, from all given arrays using SameValueZero for equality comparisons.
const num1 = [1,2,5,3,6]
const num2 = [2,4,5,6,7] 
const num3 = [5,6,7,4,3,2]
const num4 = [1,2,7,8,9,5]
const num5 = [3,6,8,2,5,9]
console.log(lodash.union(num1,num2,num3,num4,num5))
    res.send('My second ever api!')
});


  router.get("/sol1", function (req, res) {
    //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
    let arr= [1,2,3,5,6,7]
  
    let total = 0;
    for (var i in arr) {
        total += arr[i];
    }
  
    let lastDigit= arr.pop()
    let consecutiveSum= lastDigit * (lastDigit+1) / 2
    let missingNumber= consecutiveSum - total
  
    res.send(  { data: missingNumber  }  );
  });
 
  router.get("/sol2", function (req, res) {
    //logic : sum of n consecutive numbers is [ n * (first + last) / 2  ]..so get sum of all numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing
    let arr= [33, 34, 35, 37, 38]
    let len= arr.length
  
    let total = 0;
    for (var i in arr) {
        total += arr[i];
    }
  
    let firstDigit= arr[0]
    let lastDigit= arr.pop()
    let consecutiveSum= (len + 1) * (firstDigit+ lastDigit ) / 2
    let missingNumber= consecutiveSum - total
   
    res.send(  { data: missingNumber  }  );
  });
 

router.get('/test-me1', function (req, res) {

    res.send({a:5,b:7})
});

router.get('/test-post', function (req, res) {
    res.send([1,2,3])
});

router.get('/test-me3', function (req, res) {
    res.send('My 4th api!')
});

router.get('/test-me4', function (req, res) {
    res.send('My last api!')
});

module.exports = router;
// adding this comment for no reason