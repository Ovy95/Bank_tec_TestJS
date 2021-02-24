describe("Bank Class", function() {
  var bank;

  beforeEach (function () {

   bank = new Bank();
  });

  describe('Print_statement method', function() {
      it ("Returns empty transactions ",function() {
        expect(bank.print_statement()).toEqual('date || credit || debit || balance');
      })
    
  })
  describe('Credit method', function() {
    beforeEach(function () {
      bank.credit(5)
      date = bank.get_date()
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
      date = bank.get_date()
  
    })
    it ("Checks balance from beforeEach function called in spec",function() {
      expect(bank.balance).toEqual(50.00)
    })
    it ("Checks statement has the 2 transactions passed into it in order",function() {
      expect(bank.print_statement()).toEqual('date || credit || debit || balance\r\n'+("" + date +" || || 50.00 || 50.00\r\n")+("" + date +" || 100.00 || || 100.00") )
    })

    it ("It returns an error when trying to debit more then total in the account ",function() {
      expect(() => bank.debit(1000)).toThrow(new Error('Insufficient Funds in the account'));
    })

})

  describe('Matches Acceptance criteria', function() {
    beforeEach(function () {
      date = bank.get_date()
      bank.credit(1000.00)
      bank.credit(2000.00)
      bank.debit(500.00)
    })

    it ("Credit 1000 Credit 2000 Debit 500 Balance is equal to 2500",function() {
      expect(bank.balance).toEqual(2500) 
    })
    it ("Matches the order In print statements",function() {
      expect(bank.print_statement()).toEqual('date || credit || debit || balance\r\n'+date+' || || 500.00 || 2500.00\r\n'+date+' || 2000.00 || || 3000.00\r\n'+date+' || 1000.00 || || 1000.00')
    })
  })

  describe('TESTING Get Date method', function() {
    beforeEach(function () {
      date = bank.get_date()
    })
    it ("Matches this date 2020,10,5",function() {
      //                      (January = 0) 
      expect(bank.get_date(new Date(2020,04,5))).toEqual('05/05/2020') 
    })

    it ("Prints out a statements with different dates",function() {
      bank.credit(100,'22/02/2021')
      bank.credit(100,'23/02/2021')
      bank.debit(50,'23/02/2021')
      bank.debit(50)
      expect(bank.print_statement()).toEqual('date || credit || debit || balance\r\n'+date+' || || 50.00 || 100.00\r\n'+'23/02/2021 || || 50.00 || 150.00\r\n'+'23/02/2021 || 100.00 || || 200.00\r\n'+'22/02/2021 || 100.00 || || 100.00')
    })
  })
});
