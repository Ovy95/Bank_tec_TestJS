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
      date = bank.date()
    })
    it ("Adds to the balance",function() {
      expect(bank.balance).toEqual(5)
    })
    it ("Checks statement has the transaction",function() {
      expect(bank.print_statement()).toEqual(['date || credit || debit || balance', ("" + date +' || 5 ||  || 5')] )
    })
  
})

describe('debit method ', function() {
  beforeEach(function () {
    bank.credit(100)
    bank.debit(50)
    date = bank.date()
  })
  it ("Checks balance from beforeEach function called in spec",function() {
    expect(bank.balance).toEqual(50)
  })
  it ("Checks statement has the transaction",function() {
    expect(bank.print_statement()).toEqual(['date || credit || debit || balance',("" + date +" || 100 ||  || 100"),("" + date +" ||  || 50 || 50")] )
  
  
  })

})



 


   


  


  

});
