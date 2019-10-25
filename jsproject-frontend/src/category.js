const categories = []
class Category {
  constructor(id, name, available){
    this.id = id
    this.name = name
    this.available = available
    categories.push(this)
  }
  static totalCommitted(){
    return categories.reduce((t,e) => t + e.available, 0)
  }

  displayCategory(){
    const card = document.createElement('div')
    const divid = document.createAttribute('category-id')
    const div = document.getElementsByClassName('budgetContainer')[0]
    card.className = 'categories-card'
    divid.value = this.id
    card.setAttributeNode(divid)
    this.displayName(card)
    this.createAddButton(card)
    this.createDisplayTransactionButton(card)
    this.createAddTransactionButton(card)
    div.appendChild(card)
    main.appendChild(div)
  }

  displayName(card){
    const h4 = document.createElement('h4')
    let amount
    if (this.amount < 0){
      amount = `<span class="red">${this.available}</span>`
    }
    else{
      amount = `<span class="green">${this.available}</span>`
    }
    h4.innerHTML = `${this.name} Available:` + amount
    card.appendChild(h4)
  }
  createAddButton(card){
    const btn = document.createElement('button')
    const btnid = document.createAttribute('category-id')
    btn.className = "submit_button"
    btnid.value = this.id
    btn.setAttributeNode(btnid)
    btn.innerHTML = "Add Money to Category"
    btn.addEventListener('click',function(){
      this.addMoney()
    })
    card.appendChild(btn)

  }
  createAddTransactionButton(card){
    const btn = document.createElement('button')
    const btnid = document.createAttribute('category-id')
    btn.className = "submit_button"
    btnid.value = this.id
    btn.setAttributeNode(btnid)
    btn.innerHTML = "Add Transaction"
    btn.addEventListener('click',function(){
      this.addTransaction()
    })
    card.appendChild(btn)
  }

  createDisplayTransactionButton(card){
    const btn = document.createElement('button')
    const btnid = document.createAttribute('category-id')
    btn.className = "submit_button"
    btnid.value = this.id
    btn.setAttributeNode(btnid)
    btn.innerHTML = "View Transactions"
    btn.addEventListener('click',function(){
      this.displayTransactions()
    })
    card.appendChild(btn)
  }
  addMoney(){}
  addTransaction(){}
  displayTransactions(){}
}
