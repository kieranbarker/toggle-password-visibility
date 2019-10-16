(function(d) {

  "use strict";

  var toggle = d.querySelector("#show-passwords");
  var passwords = d.querySelectorAll("[type='password']");

  function togglePassword(field) {
    field.type = (toggle.checked) ? "text" : "password";
  }

  function toggleAllPasswords() {
    passwords.forEach(togglePassword);
  }

  if (toggle.checked) toggleAllPasswords();

  toggle.addEventListener("change", toggleAllPasswords, false);

})(document);