// document.addEventListener("DOMContentLoaded", () => {
//   const dashboardLink = document.getElementById("dashboard-link");

//   dashboardLink.addEventListener("click", async (event) => {
//     event.preventDefault();
//     try {
//       const response = await fetch("/api/users/checkLoggedIn", {
//         headers: { "Content-Type": "application/json" },
//       });

//       if (response.ok) {
//         document.location.replace("/dashboard");
//       } else {
//         document.location.replace("/login");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       document.location.replace("/login");
//     }
//   });
// });
