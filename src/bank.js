class Bank {

  transactions = ["date || credit || debit || balance"]
  balance = 0

  print_statement(){
    return this.transactions
  }

  credit(total){
    var date = this.date()
    this.balance += total 
    this.transactions.push(date+ " || " + total + " || "+ " || " + this.balance)
  }

  debit(total){
    var date = this.date()
    this.balance -= total 
    this.transactions.push(date+ " || "  + " || " + total + " || " + this.balance)
  }

  date(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = dd + '/' + mm + '/' + yyyy;

    var date_formatted = today.toString()

    return date_formatted
  }




}