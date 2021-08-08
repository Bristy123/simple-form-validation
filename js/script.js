function validation(){
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    var conPass = document.getElementById("conPass").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;

    if(user == ""){
        document.getElementById("username").innerHTML = " ** Please fill the username";
        return false;
    }
    if((user.length <= 2) || (user.length > 20)){
        document.getElementById("username").innerHTML = " ** username must be between 2 to 20";
        return false;
    }
    if(!isNaN(user)){
        document.getElementById("username").innerHTML = " ** only character";
        return false;
    }



    if(pass == ""){
        document.getElementById("passwords").innerHTML = " ** Please fill the password";
        return false;
    }
    if((pass.length <= 6) || (pass.length > 20)){
        document.getElementById("passwords").innerHTML = " ** password must be between 6 to 20";
        return false;
    }
    
    if(conPass == ""){
        document.getElementById("confirmPass").innerHTML = " ** Please fill the confirm password";
        return false;
    }
    if(pass != conPass){
        document.getElementById("confirmPass").innerHTML = " ** match the password";
        return false;
    }

   if(email == ""){
        document.getElementById("emailIds").innerHTML = " ** Please fill the email Id";
        return false;
    }
    if(email.indexOf("@") <= 0){
        document.getElementById("emailIds").innerHTML = " ** @ invalid position";
        return false;
    }
    if((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!='.')){
        document.getElementById("emailIds").innerHTML = " ** . invalid position";
        return false;
    }


    if(mobile == ""){
        document.getElementById("mobileNo").innerHTML = " ** Please fill the mobile number";
        return false;
    }
    if(isNaN(mobile)){
        document.getElementById("mobileNo").innerHTML = " ** only digits";
        return false;
    }
    if(mobile.length != 10){
        document.getElementById("mobileNo").innerHTML = " ** only digits";
        return false;
    }

}