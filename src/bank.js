class Bank {

  transactions = ["date || credit || debit || balance"]
  balance = 0
  
  print_statement(){
    return this.transactions
  }

  credit(total){
    this.balance += total 
    this.transactions.push("Date"+ " || " + total + " || "+ " || " + this.balance)
  }

  debit(total){
    this.balance -= total 
    this.transactions.push("Date"+ " || "  + " || " + total + " || " + this.balance)
  }




}