function validation(event) {
  event.preventDefault();
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{3,}$/;
  
  const name = document.form.name.value;
  const lastname = document.form.lname.value;
  const email =  document.getElementById('email').value.trim();
  const password = document.form.password.value;


  const female = document.getElementById('female')  
  const male = document.getElementById('male')

  const reading = document.getElementById('reading')  
  const writing = document.getElementById('writing')
  const dancing = document.getElementById('dancing')  





  if (name == null || name == "") {
    alert("firstname is required");
    return false;
  } 
  else if(lastname == null || lastname == ""){
    alert("lastname is required");
    return false;
  }
  else if (!emailPattern.test(email)) {
    alert("enter valid email address");
    return false;
  }
  else if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
    return false;
  } 
  else if(female.checked ==false && male.checked == false){
    alert('please select gender')
    return true
  }
  
  else if( reading.checked == false && writing.checked == false && dancing.checked == false){
      alert('please choose any one hobby')
      return true;
  }


  else {
    var obj = {};
    obj.name = document.form.name.value;
    obj.lastname = document.form.lname.value;
   
    obj.email = document.form.email.value;
    obj.password = document.form.password.value;

    var jsonString = JSON.stringify(obj);

    document.cookie = jsonString;
    alert("register successfully");
    window.location.href = "login.html";
  }
}
let formDiv;
let logoutBtn;

let li = localStorage.getItem('li') || [];
function get() {
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{3,}$/;

  
  let email = document.getElementById('email').value.trim();
  let pass = document.form.password.value;
  
  if (!emailPattern.test(email)) {
    alert("please enter email address");
    return false;
  } 
  else if(pass == null || pass == ""){
    alert("please enter password");
    return false;
  }
  else{

    if (document.cookie.length != 0) {
      var obj = JSON.parse(document.cookie);
           localStorage.setItem('li' , JSON.stringify(obj));
      if (email == obj.email && pass == obj.password) {
        // alert("Name=" + obj.name + " " + "password=" + obj.password);
        alert("login successfully");
        

        //  formDiv = document.getElementById('formLogin')
        // formDiv.style.display = "none"

        // logoutBtn = document.getElementById('logoutBtn')
        // logoutBtn.style.display = "block"

        window.location.href = "CRUD.html";
      } else {
        alert("invalid credentials");
      }
    } else {
      alert("Cookie not available");
    }
  }
}

// function logoutD(){
//        formDiv.style.display = "block"
//         logoutBtn.style.display = "none"
// }