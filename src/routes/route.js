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


router.get('/test-me1', function (req, res) {
    res.send('My second ever api!')
});

router.get('/test-me2', function (req, res) {
    res.send('My third api!')
});

router.get('/test-me3', function (req, res) {
    res.send('My 4th api!')
});

router.get('/test-me4', function (req, res) {
    res.send('My last api!')
});

module.exports = router;
// adding this comment for no reason