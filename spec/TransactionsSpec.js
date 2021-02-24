describe("TransActions Class", function() {
  var transaction;

  beforeEach (function () {
   transaction = new TransActions()
   bank = new Bank()
  });

  describe('Print_statement method', function() {
    it ("Returns statement value in array",function() {
      expect(transaction.print_Statement()).toEqual('date || credit || debit || balance');
    })
  })
})


