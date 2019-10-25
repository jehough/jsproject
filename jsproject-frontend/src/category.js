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
    const container = document.createElement('div')
    container.className = 'categories-container'
    card.className = 'categories-card'
    container.id = `Category ${this.id}`
    divid.value = this.id
    card.setAttributeNode(divid)
    this.displayName(card)
    this.createAddButton(card)
    this.createAddTransactionButton(card)
    this.createDisplayTransactionButton(card)
    container.appendChild(card)
    div.appendChild(container)
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
    h4.innerHTML = `${this.name} Available: ` + amount
    card.appendChild(h4)
  }
  createAddButton(card){
    const btn = document.createElement('button')
    const btnid = document.createAttribute('category-id')
    btn.className = "submit_button"
    btnid.value = this.id
    btn.setAttributeNode(btnid)
    btn.innerHTML = "Move Money"
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
    btnid.value = this.id
    btn.className = "displayTransactions"
    btn.setAttributeNode(btnid)
    btn.innerHTML = "&#x27F1<br>&#x27F0"
    btn.addEventListener('click',()=> this.getTransactions()
    )
    card.appendChild(btn)
  }
  addMoney(){}
  addTransaction(){}
  getTransactions(){
    const formData = {
      category_id: this.id
    }
    fetch(`http://localhost:3000/category/${this.id}`, makeObject("GET"))
      .then(resp => resp.json())
      .then(json => this.displayTransactions(json))
  }

  displayTransactions(json){
    const cont = document.createElement('div')
    const category = document.getElementsByClassName('categories-container').namedItem(`Category ${this.id}`)
    for (const transaction of json["data"]){
      trn = new Transaction(transaction["id"], transaction["attributes"]["description"], transaction["attributes"]["amount"], transaction["attributes"]["created_at"])
      trn.display(cont)
    }
    console.log(json)
  }
}
