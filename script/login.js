const userEmail = document.querySelector("#userEmail");
const userPassword = document.querySelector("#userPassword");
const form = document.getElementById("auth-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const userValue = document.getElementById("userEmail").value;
  const passwordValue = document.getElementById("userPassword").value;
  localStorage.setItem("password", passwordValue);
  localStorage.setItem("user", userValue);
  fetch("https://reqres.in/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      window.localStorage.setItem("token", data.token);
      window.location.replace("homePage.html");
    });
});


