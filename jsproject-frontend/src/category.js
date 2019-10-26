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
    const div = document.getElementsByClassName('budgetContainer')[0]
    const container = document.createElement('div')
    const h4 = document.createElement('h4')
    h4.id =  `Category${this.id}_name`
    container.className = 'categories-container'
    card.className = 'categories-card'
    container.id = `Category${this.id}`
    this.displayName(h4)
    card.appendChild(h4)
    this.createAddButton(card)
    this.createAddTransactionButton(card)
    this.createDisplayTransactionButton(card)
    container.appendChild(card)
    div.appendChild(container)
    main.appendChild(div)
  }

  displayName(h4){
    let amount
    if (this.amount < 0){
      amount = `<span class="red">$${this.available}</span>`
    }
    else{
      amount = `<span class="green">$${this.available}</span>`
    }
    h4.innerHTML = `${this.name} Available: ` + amount
  }
  createAddButton(card){
    const btn = document.createElement('button')
    btn.className = "submit_button"
    btn.innerHTML = "Move Money"
    btn.addEventListener('click',()=> this.addMoney())
    card.appendChild(btn)
  }
  createAddTransactionButton(card){
    const btn = document.createElement('button')
    btn.className = "submit_button"
    btn.innerHTML = "Add Transaction"
    btn.addEventListener('click',()=> this.addTransaction())
    card.appendChild(btn)
  }

  createDisplayTransactionButton(card){
    const btn = document.createElement('button')
    btn.className = "displayTransactions"
    btn.innerHTML = "&#x27F1"
    btn.addEventListener('click',()=> this.getTransactions(btn)
    )
    card.appendChild(btn)
  }
  addMoney(){
    const tdiv = document.getElementById(`transactionForm${this.id}`)
    const adiv = document.getElementById(`addMoney_${this.id}`)
    const ttab = document.getElementById(`transaction-category ${this.id}`)
    if (adiv){
      adiv.remove()
    }
    else{
      if (tdiv){
        tdiv.remove()
      }
      else if(ttab){
        ttab.remove()
      }
    const cont = document.getElementById(`Category${this.id}`)
    const div = document.createElement('div')
    const p = document.createElement('p')
    const am = document.createElement('input')
    const button = document.createElement('button')
    div.id = `addMoney_${this.id}`
    div.className = 'inputForm'
    am.type = "text"
    am.id = `addMoney_${this.id}_input`
    button.innerHTML = 'Submit'
    button.className = 'submit_button'
    button.addEventListener('click', ()=> this.transferMoney())
    p.appendChild(am)
    p.appendChild(button)
    div.appendChild(p)
    cont.appendChild(div)}
  }
  addTransaction(){
    const tdiv = document.getElementById(`transactionForm${this.id}`)
    const adiv = document.getElementById(`addMoney_${this.id}`)
    const ttab = document.getElementById(`transaction-category ${this.id}`)
    if (tdiv){
      tdiv.remove()
    }
    else{
      if (adiv){
        adiv.remove()
      }
      else if(ttab){
        ttab.remove()
      }
      const div = document.createElement('div')
      const indes = document.createElement('input')
      const inam = document.createElement('input')
      const labdes = document.createElement('label')
      const labam = document.createElement('label')
      const btn = document.createElement('button')
      const cont = document.getElementById(`Category${this.id}`)
      div.id = `transactionForm${this.id}`
      div.className = "inputForm"
      indes.type = "text"
      indes.id = `description${this.id}`
      labdes.for = `description${this.id}`
      labdes.innerHTML = "Description"
      inam.type = "text"
      inam.id = `amount${this.id}`
      labam.for = `amount${this.id}`
      labam.innerHTML = "Amount"
      btn.className = "submit_button"
      btn.innerHTML = "Add Transaction"
      btn.addEventListener('click',() => this.createTransaction())
      div.appendChild(labdes)
      div.appendChild(indes)
      div.appendChild(labam)
      div.appendChild(inam)
      div.appendChild(btn)
      cont.appendChild(div)
    }
  }

  createTransaction(){
    const description = document.getElementById(`description${this.id}`).value
    const amount = document.getElementById(`amount${this.id}`).value
    const div = document.getElementById(`transactionForm${this.id}`)
    if (amount.match(/^[0-9]+(\.{1}[0-9]{1,2})?$/, 'g')){
      div.remove()
      const formData = {
        category_id: this.id,
        description: description,
        amount: parseInt(amount)
      }
      fetch('http://localhost:3000/transactions', makeObject('POST', formData))
      .then(resp=> resp.json())
      .then(json=> updateBudget(json))}
    else{
      alert("Must be a Number in the format NN.NN or NNN")
    }
  }

  getTransactions(btn){
    const formData = {
      category_id: this.id
    }
    const tdiv = document.getElementById(`transactionForm${this.id}`)
    const adiv = document.getElementById(`addMoney_${this.id}`)
    const ttab = document.getElementById(`transaction-category ${this.id}`)
    if (ttab){
      ttab.remove()
      btn.innerHTML = '&#x27F1'
    }
    else{
      if (adiv){
        adiv.remove()
      }
      else if(tdiv){
        tdiv.remove()
      }
      btn.innerHTML = '&#x27F0'
    fetch(`http://localhost:3000/category/${this.id}`, makeObject("GET"))
      .then(resp => resp.json())
      .then(json => this.displayTransactions(json))}
  }

  displayTransactions(json){
    const cont = document.createElement('div')
    cont.id = `transaction-category ${this.id}`
    cont.className = 'transactionContainer'
    const category = document.getElementById(`Category${this.id}`)
    const table = document.createElement('table')
    const tr = document.createElement('tr')
    const thr = document.createElement('th')
    const thd = document.createElement('th')
    const tha = document.createElement('th')
    const tht = document.createElement('th')
    thr.innerHTML = "Remove"
    thd.innerHTML = "Description"
    tha.innerHTML = "Amount"
    tht.innerHTML = "Date"
    tr.appendChild(thd)
    tr.appendChild(tha)
    tr.appendChild(tht)
    tr.appendChild(thr)
    table.appendChild(tr)
    for (const transaction of json["data"]){
      const trn = new Transaction(transaction["attributes"]["description"], transaction["attributes"]["amount"], transaction["attributes"]["created_at"], transaction["id"])
      trn.display(table)
    }
    cont.appendChild(table)
    category.appendChild(cont)
  }

  transferMoney(){
    const amount = document.getElementById(`addMoney_${this.id}_input`).value
      const indiv = document.getElementById(`addMoney_${this.id}`)
    if (amount.match(/^[0-9]+(\.{1}[0-9]{1,2})?$/, 'g')){
      indiv.remove()
      const amountint = parseInt(amount)
      this.available += amountint
      this.updateMoney()}
    else{
      alert("Must be a Number in the format NN.NN or NNN")
    }
  }

  updateMoney(){
    const formData = {
      id: this.id,
      available: this.available
    }
    fetch(`http://localhost:3000/category/${this.id}`, makeObject("PATCH", formData))
      .then(resp => resp.json())
      .then(json => updateBudget(json))
  }

}
