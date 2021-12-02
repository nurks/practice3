/*function validateForm() {
    let x = document.forms["myForm"]["name"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }

  function validateForm2() {
    let x = document.forms["myForm2"]["name"].value;
    if (x == "") {
      alert("Password must be filled out");
      return false;
    }
  }


  let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("name"),
  email = id("email"),
  password = id("password"),
  form = id("form"),
  errorMsg = classes("error");



form.addEventListener("submit", (e) => {
  e.preventDefault();

  engine(username, 0, "Username cannot be blank");
  engine(email, 1, "Email cannot be blank");
  engine(password, 2, "Password cannot be blank");
});



};


*/

$(document).ready(function(){
  $("#loginbtn").click(function(){
    $("#textbelow").hide();
  });