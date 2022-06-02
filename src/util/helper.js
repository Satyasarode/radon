
const printMonth = function(){
     let currentdate = new Date()
     let currentMonth = currentdate.getMonth() +1
     console.log('the current month is '+currentMonth)
}
 const printDate = function(){
      let currentDate = new Date()
      console.log(currentDate)
 }
 const getBatchInfo = function(){
      let batchInformation = 'Radon, W3D3, the topic for today is Nodejs module system'
      console.log(batchInformation)

 }
module.exports.currentDate = printDate
module.exports.printMonth = printMonth
module.exports.xyz = getBatchInfo
