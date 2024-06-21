function clearErrors(){

    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }


}

function seterror(id, error){
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}

function validateForm(){
    var returnval = true;
    clearErrors();

    var name = document.forms['myForm']["username"].value;
    if (name.length<5){
        seterror("username", "*Length of name is too short");
        alert("Name too short!");
        returnval = false;
    }

    if (name.length == 0){
        seterror("username", "*Length of name cannot be zero!");
        returnval = false;
      
    }

    var email = document.forms['myForm']["Email"].value;
    if (email.length>15){
        seterror("Email", "*Email length is too long");
        returnval = false;
       
    }

    var phone = document.forms['myForm']["phno"].value;
    if (phone.length != 10){
        seterror("phno", "*Phone number should be of 10 digits!");
        returnval = false;
        
    }

    var password = document.forms['myForm']["pass"].value;
    if (password.length < 6){

       
        seterror("pass", "*Password should be atleast 6 characters long!");
         returnval = false;
    }

    var cpassword = document.forms['myForm']["confirmpass"].value;
    if (cpassword != password){
        seterror("confirmpass", "*Password and Confirm password should match!");
        returnval = false;
    }

    
    return returnval;
}



