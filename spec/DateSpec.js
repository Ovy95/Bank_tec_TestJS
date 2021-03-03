describe("DATES Class", function() {
  var dates;

 beforeEach (function () {
  dates = new Dates()
 });

 describe('Passing in Credit then Debit to check printStatement method is correct ', function() {
   beforeEach(function () {
     date = dates.get_date()
   })
   
   it ("CHECKS THE DATE MATCHES IT",function() {
     expect(dates.get_date()).toEqual(date)
   })
 })


 describe('TESTING Get Date method', function() {
  beforeEach(function () {
         // January Starts from 0↓
    my_birthday = new Date(2020,04,05)
 })
   it ("Prints out a custom date entered",function() {
     console.log(my_birthday)
     expect(dates.get_date(my_birthday)).toEqual("05/05/2020")
   })
 })

})