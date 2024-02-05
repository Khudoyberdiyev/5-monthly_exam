const logout = document.getElementById("logout");
logout.addEventListener("click", (e) => {
  window.localStorage.removeItem("token");
  window.location.href = "index.html";
});
function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  console.log(element);
}

const addbook = document.querySelectorAll("#addBook");
const asideUl = document.getElementById("aside-ul");
Array.from(addbook).map((item) => {
  item.addEventListener("click", (e) => {
    const asideLi = document.createElement("li");
    const asideDiv = document.createElement("div");
    asideDiv.setAttribute("class", "text");
    const asideDivh5 = document.createElement("h5");
    const asideDivp = document.createElement("p");
    asideLi.appendChild(asideDiv);
    asideDiv.appendChild(asideDivh5);
    asideDivh5.textContent = "Python";
    asideDiv.appendChild(asideDivp);
    asideDivp.textContent = "David M.bearzly 2009";
    asideUl.appendChild(asideLi);

    const asideDivRight = document.createElement("div");
    const asideDivIcon = document.createElement("i");
    asideDivIcon.setAttribute("class", "bi bi-book");
    const asideDivIcon2 = document.createElement("i");
    asideDivIcon2.setAttribute("class", "del bi bi-backspace");
    asideDivRight.appendChild(asideDivIcon);
    asideDivRight.appendChild(asideDivIcon2);
    asideLi.appendChild(asideDivRight);

    asideDivIcon2.addEventListener("click",(e) => {
        const asideDelete = asideDivIcon2.parentElement.parentElement;
        asideUl.removeChild(asideDelete);
    });
  });
});

const moreInfo = document.querySelectorAll("#moreInfo");
const container = document.querySelector('.container')
const infoDelete = document.getElementById("info_delete");
Array.from(moreInfo).map(item => {
    item.addEventListener("click",(e) => {
        container.setAttribute("style", "display:end;");
    });
    infoDelete.addEventListener("click",() => {
        container.setAttribute("style","display:none");
    })
})