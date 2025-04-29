// js/script.js
function handleLogin(e) {
    e.preventDefault();
    const role = document.getElementById("role").value;
  
    if (role === "admin") {
      window.location.href = "admin-dashboard.html";
    } else {
      window.location.href = "user-dashboard.html";
    }
  }
  