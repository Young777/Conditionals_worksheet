//Shaylen Young - 06/20 - Conditional worksheet
//Check the Login

var username = Young77
var password = password1
var Cusername = Young777
var Cpassword = password3

    //Variables for login
if(username && password === Cusername && Cpassword){
    //if they match user will get welcome message
    console.log("Welcome, (Young777)!")
}else if(username ==+ Cusername){
    console.log("User not found. Try again");
}else{
    //if they do not match it will display error
    console.log("Password does not match our records.");
}
