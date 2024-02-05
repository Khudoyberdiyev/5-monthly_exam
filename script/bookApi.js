const logout = document.getElementById("logout");
logout.addEventListener("click", (e) => {
  window.localStorage.removeItem("token");
  window.location.href = "index.html";
});
function myFunction() {
  const element = document.body;
  element.classList.toggle("dark-mode");
}

