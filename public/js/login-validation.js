const Validate = () => {
  // picking input fields with their names
    let email = document.login.email;
    let password = document.login.password;







    // picking error fields
    let emailError = document.login.emailError;
    let passwordError = document.login.passwordError;
    let confirmPasswordError = document.login.confirmPasswordError;





    if (email.value == "") {
      email.style.border = "1px solid red";
      emailError.textContent = "Email `is required";
      emailError.style =
        "color: red; font-size:11px; font-faxmily:helvetica,Arial,sans-serif;";
      email.focus();
      return false;
    }
    let EmailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
    if (!email.value.match(EmailRegex)) {
      email.style.border = "1px solid red";
      emailError.textContent = "The email address should be valid";
      emailError.style =
        "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
      email.focus();
      return false;
    } else {
      email.style.border = "1px solid green";
      emailError.textContent = "";
      password.focus();
    }
  
}