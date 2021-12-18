document.querySelector("button").addEventListener("click", signUp);
    
    var userData = JSON.parse(localStorage.getItem("userDatabase")) || [];
    console.log(userData)
    function signUp(){
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;
    var user = document.querySelector("#user").value;
    var mobile = document.querySelector("#mobile").value;

    var isEmailTaken = false
    for( var i =0; i< userData.length ; i++){
        if(userData[i].emailAdd == email){
            isEmailTaken = true;
            break;
        }
    }
    
    var userCred = {
        emailAdd: email,
        pass: password,
        userName :user,
        mobile: mobile
    };
    //console.log(isEmailTaken);
    if(isEmailTaken){
        alert("User already Registered");
        window.location.href ="signin.html"
    }  else{
        userData.push(userCred);
        localStorage.setItem("userDatabase",JSON.stringify(userData));
        window.location.href ="signin.html"
    }
 }

 function signin(){
    window.location.href = "signin.html";
 }