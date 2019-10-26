let budget


class Budget {
  constructor(id, amount){
    this.id = id
    this.amount = amount
    budget = this
  }

  makeBudgetHeader(h2){
    const committed = Category.totalCommitted()
    const available = this.amount - committed
    let avail = (available >= 0)? `<span class="green">${available}<span>` : `<span class="red">${available}<span>`
    h2.innerHTML = `Total Assets: <span>${this.amount}</span> - Committed: <span>${committed}</span> = Available to Budget: ${avail}`
  }

  display(){
    const div = document.createElement('div')
    const h2 = document.createElement('h2')
    div.className = "budgetContainer"
    h2.id = "budgetHeader"
    this.makeBudgetHeader(h2)
    div.appendChild(h2)
    main.appendChild(div)
  }


}
