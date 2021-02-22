class Bank {

  transactions = ["date || credit || debit || balance"]
  balance = 0.00

  
  print_statement(){
    return this.transactions.join("\r\n")
  }

  credit(total){
    this.balance += total 

    var date = this.get_date()

    var current_balance = this.balance
    current_balance = this.int_to_strfloat(current_balance)
    total = this.int_to_strfloat(total)

    this.transactions.splice(1,0,(date+ " || " + total + " ||"+ " || " + current_balance ))
  }

  debit(total){
    if(total > this.balance) {
      throw new Error("Insufficient Funds in the account");
    }
    this.balance -= total 

    var date = this.get_date()

    var current_balance = this.balance
    current_balance = this.int_to_strfloat(current_balance)
    total = this.int_to_strfloat(total)
    this.transactions.splice(1,0,(date+ " ||"  + " || " + total + " || " + current_balance))
  }

  get_date(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = dd + '/' + mm + '/' + yyyy;

    var date_formatted = today.toString()

    return date_formatted
  }

  int_to_strfloat(number){
    number.toFixed(2)
    return number.toFixed(2)
  }

}