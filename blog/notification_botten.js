// notification_button.js

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.createElement("button");
    btn.id = "floating-btn";
    btn.innerHTML = "💬"; // You can use a chat icon or emoji
    btn.title = "Show Notification";
  
    btn.onclick = () => {
      showNotification("Hello! This is a floating notification!");
    };
  
    document.body.appendChild(btn);
  });
  