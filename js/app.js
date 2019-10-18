;(function(d) {

  "use strict";

  var forms = document.querySelectorAll("form");
  
  function togglePassword(field) {
    field.type = (event.target.checked) ? "text" : "password";
  }

  function toggleAllPasswords(event) {
    if (!event.target.hasAttribute("data-toggle")) return;
    var passwords = event.target.closest("form").querySelectorAll("[data-password]");
    passwords.forEach(togglePassword);
  }

  function togglePasswordsOnLoad(form) {
    var toggle = form.querySelector("[data-toggle]");
    var passwords = form.querySelectorAll("[data-password]");
    passwords.forEach(function(password) {
      password.type = (toggle.checked) ? "text" : "password";
    });
  }

  // Firefox persists checkbox state, so for each form,
  // toggle its password(s) on page load if its checkbox is checked
  forms.forEach(togglePasswordsOnLoad);

  document.body.addEventListener("change", toggleAllPasswords, false);

})(document);