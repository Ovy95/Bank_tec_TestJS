class Bank {
 constructor() {
   this.trans = new TransActions();
 }
  transactions = ["date || credit || debit || balance"]
  balance = 0.00
  date = this.get_date()
  print_statement(){
    return this.transactions.join("\r\n")
  }

  credit(total,date){
    this.balance += total 
    if (date==null){
    var date = this.get_date()
    }
    var current_balance = this.balance
    this.trans.get_tranaction([date,total,current_balance,"CREDIT"])

    current_balance = this.int_to_strfloat(current_balance)
    total = this.int_to_strfloat(total)

    this.transactions.splice(1,0,(date+ " || " + total + " ||"+ " || " + current_balance ))
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
    this.trans.get_tranaction([date,total,current_balance,"DEBIT"])


    current_balance = this.int_to_strfloat(current_balance)
    total = this.int_to_strfloat(total)
    
    this.transactions.splice(1,0,(date+ " ||"  + " || " + total + " || " + current_balance))
  }

  get_date(today = new Date()){
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = dd + '/' + mm + '/' + yyyy;

    today = today.toString()
    return today
  }

  int_to_strfloat(number){
    number.toFixed(2)
    return number.toFixed(2)
  }

}