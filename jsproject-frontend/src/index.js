const login = document.getElementById('login')
const new_user = document.getElementById('new_user')
const button_container = document.getElementById('button_container')
const new_user_button = document.getElementById('new_user_button')
const login_button = document.getElementById('login_button')
const configObj = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify(formData)
};

login.addEventListener('click', function(e){
  button_container.style.visibility = "hidden"
  document.getElementById('login_form').style.visibility = "visible"
})

new_user.addEventListener('click', function(e){
  button_container.style.visibility = "hidden"
  document.getElementById('new_user_form').style.visibility = "visible"
})

new_user_button.addEventListener('click',function(e){
  getNewBudget()
})
