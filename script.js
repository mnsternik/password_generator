function generate(e) {
    e.preventDefault();
    
    let passwordField = document.getElementById('password');
    let messageField = document.getElementById('message'); 

    passwordField.value = generatePassword(); 
    messageField.value = generateMessage(); 

    return false;
  }

function generatePassword() {
    let passwordLength = document.getElementById('password_length').value; 
 	let password = ""; 
  
    for (let i = 0; i < passwordLength; i++) {
  	    password += String.fromCharCode(Math.round(Math.random() * 89) + 33);
    }
  
    return password; 
}

function getPasswordIndex() {
    return "99999"
}

function generateMessage() {
    let message = `Password has been generated. Contact your administrator and ask for password with index "${getPasswordIndex()}"`
    return message; 
}