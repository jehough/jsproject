let budget


class Budget {
  constructor(id, amount){
    this.id = id
    this.amount = amount
    budget = this
  }

  display(){
    const main = document.querySelector('main')
    const div = document.createElement('div')
    const divid = document.createAttribute('budget-id')
    const h2 = document.createElement('h2')
    const committed = Category.totalCommitted()
    div.className = "budgetContainer"
    divid.value = budget.id
    div.setAttributeNode(divid)
    h2.innerHTML = `Total Assets: ${budget.amount} - Committed: ${committed} = Available to Budget: ${budget.amount - committed}`
    main.appendChild(h2)
  }
}
