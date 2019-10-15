(function(d) {

  "use strict";

  var toggle = d.querySelector("#show-password");
  var password = d.querySelector("#password");

  function togglePassword() {
    password.type = (this.checked) ? "text" : "password";
  }

  if (toggle.checked) password.type = "text";

  toggle.addEventListener("change", togglePassword, false);

})(document);