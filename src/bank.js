class Bank {
 constructor() {
   this.transaction = new TransActions();
   this.dates = new Dates()
 }

  balance = 0.00

  credit(total,date){
    this.balance += total 
    if (date==null){
    var date = this.dates.get_date()
    }
    var current_balance = this.balance
    this.transaction.get_tranaction([date,total,current_balance,"CREDIT"])
  }

  debit(total,date){
    if(total > this.balance) {
      throw new Error("Insufficient Funds in the account");
    }
    if (date==null){
      var date = this.dates.get_date()
    }
    this.balance -= total 
    
    var current_balance = this.balance
    this.transaction.get_tranaction([date,total,current_balance,"DEBIT"])
  }
}

