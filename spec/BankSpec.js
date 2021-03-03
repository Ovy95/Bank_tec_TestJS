describe("Bank Class", function() {
  var bank;

  beforeEach (function () {
   bank = new Bank();
   dates = new Dates();

  });
  describe('Credit method Testing', function() {
    beforeEach(function () {
      bank.credit(5)
    })
    it ("Adds 5 credits to balance",function() {
      expect(bank.account_Balance).toEqual(5.00)
    })
})

  describe('Debit method testing ', function() {
    beforeEach(function () {
      // date = bank.dates.get_date()
      bank.credit(100.00)
      bank.debit(50.00)
    })
    it ("CHECKS balance is equal to 50. After Crediting 100 then debit 50 ",function() {
      expect(bank.account_Balance).toEqual(50.00)
    })

    it ("It returns an error when trying to debit more then total in the account ",function() {
      expect(() => bank.debit(1000)).toThrow(new Error('Insufficient Funds in the account'));
    })

})

  describe('Matches Acceptance criteria interms of adding up the total', function() {
    beforeEach(function () {
      date = bank.dates.get_date()
      bank.credit(1000.00)
      bank.credit(2000.00)
      bank.debit(500.00)
    })

    it ("Credit 1000 Credit 2000 Debit 500 Balance is equal to 2500",function() {
      expect(bank.account_Balance).toEqual(2500) 
    })
  })

  describe('TESTING Get Date method', function() {
    beforeEach(function () {
      date = bank.dates.get_date()
    })

    it ("Checks the balance is correct from using different dates",function() {
      bank.credit(100,'22/02/2021')
      bank.credit(100,'23/02/2021')
      bank.debit(50,'23/02/2021')
      bank.debit(50)
      expect(bank.account_Balance).toEqual(100)
    })
  })
 
});
