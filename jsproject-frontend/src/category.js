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
    const div = document.createElement('div')
    const divid = document.createAttribute('category-id')
    const h4 = document.createElement('h4')
    div.className = 'categories-card'
    divid.value = this.id
    div.setAttributeNode(divid)
    h4.innerHTML = this.name
    div.appendChild(h4)
    main.appendChild(div)
  }
}
