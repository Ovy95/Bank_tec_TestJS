

class Bank {

  transactions = ["date || credit || debit || balance"]
  balance = 0.00

  
  print_statement(){
    console.log(this.transactions.join("\r\n"))
    return this.transactions
  }

  credit(total){
    this.balance += total 

    var date = this.date()
    var current_balance = this.balance
    current_balance = this.int_to_float(current_balance)
    total = this.int_to_float(total)


    this.transactions.push(date+ " || " + total + " ||"+ " || " + current_balance)
  }

  debit(total){
    this.balance -= total 


    var date = this.date()
    var current_balance = this.balance
    current_balance = this.int_to_float(current_balance)
    total = this.int_to_float(total)

    this.transactions.push(date+ " ||"  + " || " + total + " || " + current_balance)
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

  int_to_float(number){
    number.toFixed(2)
    return number.toFixed(2)
  }




}