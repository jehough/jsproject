let budget


class Budget {
  constructor(id, amount){
    this.id = id
    this.amount = amount
    budget = this
  }

  display(){
    const div = document.createElement('div')
    const divid = document.createAttribute('budget-id')
    const h2 = document.createElement('h2')
    const committed = Category.totalCommitted()
    div.className = "budgetContainer"
    divid.value = budget.id
    div.setAttributeNode(divid)
    h2.id = "budgetHeader"
    h2.innerHTML = `Total Assets: <span>${budget.amount}</span> - Committed: <span>${committed}</span> = Available to Budget: <span>${budget.amount - committed}</span>`
    div.appendChild(h2)
    main.appendChild(div)
  }
}
