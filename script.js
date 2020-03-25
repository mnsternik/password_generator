(function () {
  const specialCharacters = document.getElementById('special_characters');
  const passwordField = document.getElementById('password');
  const generateBtn = document.getElementById('generate-btn');

  const generatePassword = () => {
    const passwordLength = document.getElementById('password_length').value;
    let password = "";

    if (specialCharacters.checked) {
      for (let i = 0; i < passwordLength; i++) {
        password += String.fromCharCode(Math.round(Math.random() * 89) + 33);
      }
    } else {
      const nonSpecials = [];
      for (let i = 48; i < 58; i++) { nonSpecials.push(i) }
      for (let i = 65; i < 91; i++) { nonSpecials.push(i) }
      for (let i = 97; i < 123; i++) { nonSpecials.push(i) }
      for (let i = 0; i < passwordLength; i++) {
        password += String.fromCharCode(nonSpecials[Math.round(Math.random() * nonSpecials.length)]);
      }
    }
    passwordField.value = password;
  }

  generateBtn.addEventListener('click', generatePassword, false);
})();
