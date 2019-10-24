const login = document.getElementById('login')
const new_user = document.getElementById('new_user')
const button_container = document.getElementById('button_container')
const new_user_button = document.getElementById('new_user_button')
const login_button = document.getElementById('login_button')
let formData
const configObj = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Action": "application/json"
  },
  body: JSON.stringify(formData)
};

function displayBudget(json){
  console.log(json)
}

login.addEventListener('click', function(e){
  button_container.style.visibility = "hidden"
  document.getElementById('login_form').style.visibility = "visible"
})

new_user.addEventListener('click', function(e){
  button_container.style.visibility = "hidden"
  document.getElementById('new_user_form').style.visibility = "visible"
})

new_user_button.addEventListener('click',()=>{
  formData = {
    name: document.getElementById('userName').value
  }
  fetch("http://localhost:3000/users/new", configObj)
  .then(resp => resp.json())
  .then(json => displayBudget(json))
})

login_button.addEventListener('click',()=>{
  formData = {
    name: document.getElementById('newName').value
  }
  fetch("http://localhost:3000/users", configObj)
  .then(resp => resp.json())
  .then(json => displayBudget(json))
})
