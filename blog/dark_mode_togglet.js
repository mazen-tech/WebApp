// dark_mode_toggler.js
$(document).ready(function () {
    const darkModeButton = $("#darkModeToggle");
  
    // Apply saved theme on load
    if (localStorage.getItem("darkMode") === "enabled") {
      $("body").addClass("dark-mode");
      darkModeButton.text("☀️");
    }
  
    // Toggle theme
    darkModeButton.on("click", function () {
      $("body").toggleClass("dark-mode");
      if ($("body").hasClass("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
        darkModeButton.text("☀️");
      } else {
        localStorage.setItem("darkMode", "disabled");
        darkModeButton.text("🌙");
      }
    });
  });
  