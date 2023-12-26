
let uname = document.getElementById("uname");
let email=document.getElementById("email");
let ph=document.getElementById("ph");
let add=document.getElementById("add");
let pin=document.getElementById("pin");
let aadhar=document.getElementById("aadhar");
let password=document.getElementById("password");
let cpassword=document.getElementById("cpassword");
let qua=document.getElementById("qua");
let date=document.getElementById("date");

function validateform(){
    if(uname.value==""|| uname.value.length<6){
        document.getElementById("errorname").innerHTML="* please provide your full name with min 6 latter *";
    }

    if(email.value==""){
        document.getElementById("erroremail").innerHTML="*please give your  address*";
    }

    if(date.value==""){
        document.getElementById("errordate").innerHTML="*please give your date of birth address*";
    }

    if(ph.value=="" || ph.value.length != 10){
        document.getElementById("errorph").innerHTML="* Please provide valid phone number *"
    }

    if(add.value==""){
        document.getElementById("erroradd").innerHTML="*please provide your address *";
    }
    if(pin.value=="" || pin.value.length !=6){
        document.getElementById("errorpin").innerHTML="* please provide correct pin code *";
    }

    if(aadhar.value=="" || aadhar.value.length !=12){
        document.getElementById("erroraadhar").innerHTML="* please provide correct aadhar code *";
    }

    if(password.value==""|| password.value.length < 8){
        document.getElementById("errorpassword").innerHTML="* please provide min 8 character password *";
    }
    if(password.value != cpassword.value){
        document.getElementById("errorcpassword").innerHTML="* password not match *";
    }

    if(qua.value==-1){
        document.getElementById("errorqua").innerHTML= " * select your highest qualification *";    }

    




    return false;
}
