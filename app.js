;(function () {

  // Opt into ES5 strict mode
  "use strict";

  //
  // Variables
  //

  // Get the main element
  var main = document.querySelector("main");


  //
  // Functions
  //

  /**
   * Toggle the visibility of a single password field
   * @param {Node} password The password field
   */
  function togglePassword (password) {
    password.type = event.target.checked ? "text" : "password";
  }

  /**
   * Toggle all password fields inside a single form
   * @param {Object} event The Event object
   */
  function togglePasswords (event) {

    // If this isn't a password toggle, do nothing
    if (!event.target.matches("[data-toggle]")) return;

    // Get the closest form
    // If it doesn't exist, do nothing
    var form = event.target.form;
    if (!form) return;

    // Get all password fields inside this form
    var passwords = form.querySelectorAll("[data-password]");

    // Toggle the password fields
    passwords.forEach(togglePassword);

  }


  //
  // Init
  //

  // Toggle password fields on change
  main.addEventListener("change", togglePasswords);

})();