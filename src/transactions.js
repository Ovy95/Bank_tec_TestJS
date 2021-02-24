class TransActions {
  statement = ["date || credit || debit || balance"]

  print_Statement(){
    return this.statement.join("\r\n")
  }
  get_tranaction (debitOrCredit) {
    debitOrCredit[1] = debitOrCredit[1].toFixed(2)
    debitOrCredit[2] = debitOrCredit[2].toFixed(2)
    this.filter_transactions_array(debitOrCredit)
  }

  filter_transactions_array(array) {
    if (array[3] == "DEBIT"){
      this.statement.splice(1,0,(array[0]+ " ||"  + " || " + array[1] + " || " + array[2]))
    }else if(array[3] == "CREDIT"){
        this.statement.splice(1,0,(array[0]+ " || " + array[1] + " ||"+ " || " + array[2] ))
    }
  }

}

