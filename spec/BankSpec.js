describe("Bank Class", function() {
  var bank;

  beforeEach (function () {
   bank = new Bank();
  });

  describe('Print_statement method', function() {
      it ("Returns an empty statement",function() {
        expect(bank.print_statement()).toEqual('date || credit || debit || balance');
      })
    
  })
  describe('Credit method', function() {
    beforeEach(function () {
      bank.credit(5)
      date = bank.date()
    })
    it ("Adds to the balance",function() {
      expect(bank.balance).toEqual(5.00)
    })
    it ("Checks statement has the transaction",function() {
      expect(bank.print_statement()).toEqual('date || credit || debit || balance\r\n'+( ""+ date +' || 5.00 || || 5.00'))
    })
  
})

  describe('debit method ', function() {
    beforeEach(function () {
      bank.credit(100.00)
      bank.debit(50.00)
      date = bank.date()
    })
    it ("Checks balance from beforeEach function called in spec",function() {
      expect(bank.balance).toEqual(50.00)
    })
    it ("Checks statement has the transaction",function() {
      expect(bank.print_statement()).toEqual('date || credit || debit || balance\r\n'+("" + date +" || || 50.00 || 50.00\r\n")+("" + date +" || 100.00 || || 100.00") )
    })

})




 


   


  


  

});
