class Transaction {
  constructor(description, amount, date, id){
    this.description = description
    this.amount = amount
    this.date = getDate(date)
    this.id = id
  }
}
