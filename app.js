;(function(d) {

  "use strict";

  var toggles = d.querySelectorAll("[data-toggle]");

  function togglePassword(field) {
    field.type = (event.target.checked) ? "text" : "password";
  }

  function toggleAllPasswords(event) {
    if (!event.target.hasAttribute("data-toggle")) return;
    var passwords = event.target.closest("form").querySelectorAll("[data-password]");
    passwords.forEach(togglePassword);
  }

  function resetToggle(toggle) {
    toggle.checked = false;
  }

  // Reset each toggle when the page loads because Firefox caches checkbox state
  toggles.forEach(resetToggle);

  d.body.addEventListener("change", toggleAllPasswords, false);

})(document);