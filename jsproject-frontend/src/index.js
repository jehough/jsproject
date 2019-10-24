const login = document.getElementById('login')
const new_user = document.getElementById('new_user')
const button_container = document.getElementById('button_container')

login.addEventListener('click', function(e){
  button_container.style.visibility = "hidden"
  document.getElementById('login_form').style.visibility = "visible"
})
