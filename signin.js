document.querySelector("button").addEventListener("click",signIn);
    
    var regdUsers = JSON.parse(localStorage.getItem("userDatabase") );
   
   // console.log(regdUsers);
    
    function signIn(){
        var email = document.querySelector("#email").value;
        var password = document.querySelector("#password").value;

        if(email == "admin" && password == "admin"){
            window.location.href = "admin.html"
        }
        else{
           for(var i = 0; i< regdUsers.length; i++){
              if(regdUsers[i].emailAdd == email && regdUsers[i].pass == password ){
                    console.log(regdUsers[i]);
    
                   window.location.href = "r&f.html";

                   
                }
             else   if (regdUsers[i].emailAdd !== email && regdUsers[i].pass !== password){
                    
                    document.getElementById('alrt').innerHTML='<b> WE ARE CHECKING ID && PASSWORK  <br> Please wait, Your download will start soon!!!</b>'; 
                    setTimeout(function() {document.getElementById('alrt').innerHTML='';},8000);


                }
           }
        }
    }