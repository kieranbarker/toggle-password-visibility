(function(d) {

  "use strict";

  var toggle = d.querySelector("#show-password");

  function togglePassword() {
    var password = d.querySelector("#password");
    password.type = (this.checked) ? "text" : "password";
  }

  toggle.addEventListener("change", togglePassword);

})(document);