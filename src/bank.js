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
    this.decline_transaction(total,this.balance)
    if (date==null){
      var date = this.dates.get_date()
    }
    this.balance -= total 
    
    var current_balance = this.balance
    this.transaction.get_tranaction([date,total,current_balance,"DEBIT"])
  }

  decline_transaction(debit, balance){
    if(debit > balance) {
      throw new Error("Insufficient Funds in the account");
    }
  }

}

