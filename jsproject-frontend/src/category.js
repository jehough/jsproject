const categories = []
class Category {
  constructor(name, available){
    this.name = name
    this.available = available
    categories.push(this)
  }
}
