async function userLogin(event) {
    event.preventDefault();
  
    const username = document.querySelector("#username-login").value.trim();
  
    const password = document.querySelector("#password-login").value.trim();
  
    if (username && password) {
      const response = await fetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.replace("/dashboard");
      } else {
        alert("Failed to log in");
      }
    }
  }
  
  async function userSignup(event) {
    event.preventDefault();
  
    const username = document.querySelector("#username-signup").value.trim();
    const email = document.querySelector("#email-signup").value.trim();
    const password = document.querySelector("#password-signup").value.trim();
  
    if (username && email && password) {
      const response = await fetch("/api/users/register", {
        method: "POST",
        body: JSON.stringify({
          username,
          email,
          password,
        }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.replace("/");
      } else {
        alert("Sign-up failed.");
      }
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector(".login-form");
    const signupForm = document.querySelector(".signup-form");
  
    if (loginForm) {
      loginForm.addEventListener("submit", userLogin);
    }
  
    if (signupForm) {
      signupForm.addEventListener("submit", userSignup);
    }
  });
  