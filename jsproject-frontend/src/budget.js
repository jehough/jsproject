let budget


class Budget {
  constructor(id, amount, user){
    this.id = id
    this.amount = amount
    this.user = user
    budget = this
  }

  makeBudgetHeadline(h2){
    const committed = Category.totalCommitted()
    const available = this.amount - committed
    let avail = (available >= 0)? `<span class="green">$${available}<span>` : `<span class="red">$${available}<span>`
    h2.innerHTML = `Total Assets: <span>$${this.amount}</span> - Committed: <span>$${committed}</span> = Available to Budget: ${avail}`
  }
  createNewCategoryButton(nav){
    const button = document.createElement('button')
    button.id = "CreateCategory"
    button.innerHTML = "Add a Category"
    button.className = "submit_button"
    button.addEventListener('click',()=> this.addCategory())
    nav.appendChild(button)
  }

  createAddIncomeButton(nav){
    const button = document.createElement('button')
    button.id = "addIncome"
    button.innerHTML = "Add Income"
    button.className = "submit_button"
    button.addEventListener('click', ()=> this.addIncome())
    nav.appendChild(button)
  }

  createSeeDistributionButton(div){
    const button = document.createElement('button')
    button.id = "Distribution"
    button.innerHTML = "See Distribution"
    button.className = "submit_button"
    button.addEventListener('click', ()=> this.graphDistribution())
    div.appendChild(button)
  }

  display(){
    document.getElementById('openHeader').remove()
    const div = document.createElement('div')
    const h2 = document.createElement('h2')
    const h1 = document.createElement('h1')
    div.id = "budgetHeaderContainer"
    h1.innerHTML = `${this.user}'s Budgetbook`
    h2.id = "budgetHeader"
    this.makeBudgetHeadline(h2)
    div.appendChild(h1)
    div.appendChild(h2)
    header.appendChild(div)
    this.createNavBar()
  }

  createNavBar(){
    const nav = document.querySelector('nav')
    const div = document.createElement('div')
    div.id = "navButtonContainer"
    this.createNewCategoryButton(div)
    this.createAddIncomeButton(div)
    this.createSeeDistributionButton(div)
    nav.appendChild(div)
  }

  addCategory(){
    const name = prompt("Enter a Category Name")
    if (name != '' && name != null)
    {const formData = {
      budget_id: this.id,
      category_name: name
    }
    fetch('http://localhost:3000/category', makeObject("POST", formData))
      .then(resp => resp.json())
      .then(json => addCategory(json))}
  }

  addIncome(){
    const amount = prompt("How much Income to add?")
    if(amount.match(/^[0-9]+(\.{1}[0-9]{1,2})?$/, 'g')){
      this.amount += amount
      const formData = {
        id = this.id
        total = this.amount
      }
      fetch(`http://localhost:3000/budget/${this.id}`, makeObject("PATCH", formData))
        .then(resp => resp.json())
        .then(json => console.log(json))
    }
  }
}
