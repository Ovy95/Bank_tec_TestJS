describe("TransActions Class", function() {
   var bank;

  beforeEach (function () {
   bank = new Bank()
   transaction = new TransActions()
   dates = new Dates()
  });

  describe('Print_statement method', function() {
    it ("Returns statement value in array",function() {
      expect(transaction.print_Statement()).toEqual('date || credit || debit || balance');
    })
  })

  describe('Passing in Credit then Debit to check printStatement method is correct ', function() {
    beforeEach(function () {
      bank.credit(100.00,)
      bank.debit(50.00)
      date = bank.dates.get_date()
    })
    
    it ("Checks statement has the 2 transactions passed into it in order",function() {
      expect(bank.transaction.print_Statement()).toEqual('date || credit || debit || balance\r\n'+("" + date +" || || 50.00 || 50.00\r\n")+("" + date +" || 100.00 || || 100.00") )
    })

  })

  describe('Matches Acceptance criteria', function() {
    beforeEach(function () {
      date = bank.dates.get_date()
      bank.credit(1000.00)
      bank.credit(2000.00)
      bank.debit(500.00)
    })

    it ("Matches the order In print statements",function() {
      expect(bank.transaction.print_Statement()).toEqual('date || credit || debit || balance\r\n'+date+' || || 500.00 || 2500.00\r\n'+date+' || 2000.00 || || 3000.00\r\n'+date+' || 1000.00 || || 1000.00')
    })
  })

  describe('TESTING Get Date method', function() {
    beforeEach(function () {
      date = bank.dates.get_date()
    })
  
    it ("Prints out a statements with different dates",function() {
      bank.credit(100,'22/02/2021')
      bank.credit(100,'23/02/2021')
      bank.debit(50,'23/02/2021')
      bank.debit(50)
      expect(bank.transaction.print_Statement()).toEqual('date || credit || debit || balance\r\n'+date+' || || 50.00 || 100.00\r\n'+'23/02/2021 || || 50.00 || 150.00\r\n'+'23/02/2021 || 100.00 || || 200.00\r\n'+'22/02/2021 || 100.00 || || 100.00')
    })
  })




})


