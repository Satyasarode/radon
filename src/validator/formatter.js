const toLowerCase = function() {
    const string = 'Satya'
    console.log(string.toLowerCase())
}

const toUpperCase = function(){
    const string2 = 'sathish'
    console.log(string2.toUpperCase())
}
const trim = function(){
    const string3 = ' rahul ' 
    console.log(string3.trim())
}
module.exports.lowercase = toLowerCase
module.exports.uppercase = toUpperCase
module.exports.abc = trim