class Transaction {
  constructor(description, amount, date, id){
    this.description = description
    this.amount = amount
    const dt = new Date(date)
    this.date = dt.toDateString()
    this.id = id
  }
  display(table){
    const tr = document.createElement('tr')
    const tdd = document.createElement('td')
    const tda = document.createElement('td')
    const tdt = document.createElement('td')
    tdd.innerHTML = this.description
    tda.innerHTML = `$${this.amount}`
    tdt.innerHTML = `${this.date}`
    tr.appendChild(tdd)
    tr.appendChild(tda)
    tr.appendChild(tdt)
    table.appendChild(tr)
  }
}
