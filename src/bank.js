class Bank {
 constructor() {
   this.transaction = new TransActions();
 }
  balance = 0.00
  date = this.get_date()
 
  credit(total,date){
    this.balance += total 
    if (date==null){
    var date = this.get_date()
    }
    var current_balance = this.balance
    this.transaction.get_tranaction([date,total,current_balance,"CREDIT"])
  }

  debit(total,date){
    if(total > this.balance) {
      throw new Error("Insufficient Funds in the account");
    }
    if (date==null){
      var date = this.get_date()
    }
    this.balance -= total 
    
    var current_balance = this.balance
    this.transaction.get_tranaction([date,total,current_balance,"DEBIT"])
  }

  get_date(today = new Date()){
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = dd + '/' + mm + '/' + yyyy;

    today = today.toString()
    return today
  }

}