class Bank {
 constructor() {

   this.account_Balance = 0.00

   this.transaction = new TransActions()

   this.dates = new Dates()
 }

  

  credit(total,date){
    this.account_Balance += total 


    if (date==null){
    var date = this.dates.get_date()
    }

    var current_balance = this.account_Balance
    this.transaction.get_tranaction([date,total,current_balance,"CREDIT"])
  }

  debit(total,date){
    this.decline_transaction(total,this.account_Balance)


    if (date==null){
      var date = this.dates.get_date()
    }
    
    this.account_Balance -= total 
    
    var current_balance = this.account_Balance

    this.transaction.get_tranaction([date,total,current_balance,"DEBIT"])
  }

  decline_transaction(debit, balance){
    if(debit > balance) {
      throw new Error("Insufficient Funds in the account");
    }
  }

  

}

