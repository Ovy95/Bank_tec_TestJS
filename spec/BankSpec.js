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



 


   


  


  

});
