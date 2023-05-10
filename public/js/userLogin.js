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

document.addEventListener("DOMContentLoaded", () => {
  const loginLink = document.querySelector(".login-link");

  if (loginLink) {
    loginLink.addEventListener("click", (event) => {
      event.preventDefault();
      document.location.replace("/login");
    });
  }
});
