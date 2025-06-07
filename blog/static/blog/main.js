$("#pop").on("click", function() {
   $('#imagepreview').attr('src', $('#imageresource').attr('src')); // here assign the image to the modal when the user clicks the enlarge link
   $('#imagemodal').modal('show'); // image modal is the id attribute assigned to the bootstrap modal
});

$(document).ready(function () {
   // Dark Mode Toggle
   const darkModeButton = $("#darkModeToggle");
   const bodyElement = $("body");

   // Check if dark mode preference exists in localStorage
   if (localStorage.getItem("darkMode") === "enabled") {
     bodyElement.addClass("dark-mode");
     darkModeButton.text("☀️");
   }

   // Toggle Dark Mode
   darkModeButton.on("click", function () {
     bodyElement.toggleClass("dark-mode");

     // Save the preference to localStorage
     if (bodyElement.hasClass("dark-mode")) {
       localStorage.setItem("darkMode", "enabled");
       darkModeButton.text("☀️");
     } else {
       localStorage.setItem("darkMode", "disabled");
       darkModeButton.text("🌙");
     }
   });

   // Debugging to ensure everything works
   console.log("Document Ready - Dark Mode Toggle Script Loaded");
});
