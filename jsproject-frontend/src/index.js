const login = document.getElementById('login')
const new_user = document.getElementById('new_user')
const login_form = document.getElementById('login_form')
const new_user_form = document.getElementById('new_user_form')
const button_container = document.getElementById('button_container')
const new_user_button = document.getElementById('new_user_button')
const login_button = document.getElementById('login_button')
const main = document.querySelector("main")




function displayBudget(json){
  budgetobj = json["data"]
  new Budget(budgetobj["id"], budgetobj["attributes"]["total"])
  categories.splice(0,categories.length)
  for(const category of json["included"]){
    id = category["id"]
    name = category["attributes"]["name"]
    available = category["attributes"]["available"]
    new Category(id, name, available)
  }
  const myNode = document.getElementsByTagName('main')[0]
  while (myNode.firstChild){
    myNode.removeChild(myNode.firstChild)
  }
  budget.display()
  for(const category of categories){
    category.displayCategory()
  }
}

function makeObject(method, formData){
  return  {
    method: method,
    headers: {
      "Content-Type": "application/json",
      "Action": "application/json"
    },
    body: JSON.stringify(formData)
  };
}

function getDate(date){

}
function displayError(json) {
  button_container.style.visibility = "visible"
  login_form.style.visiblility = "hidden"
  login_form.style.visibility = "hidden"
  error = document.createElement('p')
  error.innerHTML = json["message"]
  error.id = "error"
  button_container.appendChild(error)
}

login.addEventListener('click', function(e){
  button_container.style.visibility = "hidden"
  login_form.style.visibility = "visible"
})

new_user.addEventListener('click', function(e){
  button_container.style.visibility = "hidden"
  new_user_form.style.visibility = "visible"
})

new_user_button.addEventListener('click',()=>{
  let configObj = makeObject("POST", {name: document.getElementById('newName').value})
  fetch("http://localhost:3000/users/new", configObj)
  .then(resp => resp.json())
  .then(json => displayBudget(json))
})

login_button.addEventListener('click',()=>{
  let configObj = makeObject("POST", {name: document.getElementById('userName').value})
  json = fetch("http://localhost:3000/users", configObj)
  .then(resp => resp.json())
  .then(json => {
    if (json["status"]==="error"){
      displayError(json)
    }
    displayBudget(json)})
})
