describe("Bank Class", function() {
  var bank;

  beforeEach (function () {
   bank = new Bank();
  });

  describe('Print_statement method', function() {
      it ("Returns an empty statement",function() {
        expect(bank.print_statement()).toEqual(['date || credit || debit || balance']);
      })
    
  })
  describe('Credit method', function() {
    beforeEach(function () {
      bank.credit(5)
    })
    it ("Adds to the balance",function() {
      expect(bank.balance).toEqual(5)
    })
    it ("Checks statement has the transaction",function() {
      expect(bank.print_statement()).toEqual(['date || credit || debit || balance', 'Date || 5 ||  || 5'] )
    })
  
})



 


   


  


  

});
